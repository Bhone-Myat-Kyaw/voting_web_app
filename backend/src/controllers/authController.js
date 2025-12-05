const bcrypt = require("bcrypt");
const supabase = require("../config/supabase");
const jwt = require("jsonwebtoken");
const getUserData = require("../utils/getUserData");
const { signAccessToken, signRefreshToken } = require("../utils/signToken");

async function login(req, res) {
  try {
    const { admissionid, password } = req.body;

    const { data, error } = await supabase
      .from("students")
      .select("passwordhash, role, id")
      .eq("admissionid", admissionid);

    if (error) return res.status(400).json({ error: error.message });

    if (!data || data.length === 0) {
      return res.status(400).json({ error: "Invalid admission ID" });
    }

    const student = data[0];

    const isMatch = await bcrypt.compare(
      String(password),
      student.passwordhash
    );
    if (!isMatch) {
      return res.status(400).json({ error: "Wrong Password" });
    }

    // if anything goes wrong, this is the problem
    const accessToken = signAccessToken({ id: student.id, role: student.role });
    const refreshToken = signRefreshToken({
      id: student.id,
      role: student.role,
    });

    const isProduction = process.env.NODE_ENV === "production";

    return res
      .cookie("access_token", accessToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
        path: "/",
        maxAge: 15 * 60 * 1000,
      })
      .cookie("refresh_token", refreshToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .json({
        message: "Login successful",
        redirectUrl: student.role == "student" ? "/vote" : "/admin",
      });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function logout(req, res) {
  try {
    const isProduction = process.env.NODE_ENV === "production";
    return res
      .clearCookie("access_token", {
        httpOnly: true,
        secure: isProduction,
        sameSite: "none",
      })
      .clearCookie("refresh_token", {
        httpOnly: true,
        secure: isProduction,
        sameSite: "none",
      })
      .status(200)
      .json({ message: "Logged out successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function checkToken(req, res) {
  try {
    const accessToken = req.cookies.access_token;
    const refreshToken = req.cookies.refresh_token;
    const isProduction = process.env.NODE_ENV === "production";

    // 1. No access token
    if (!accessToken) {
      if (!refreshToken) {
        return res.status(401).json({ error: "No tokens, please login." });
      }

      try {
        const refreshPayload = jwt.verify(
          refreshToken,
          process.env.JWT_REFRESH_SECRET
        );

        // if anything goes wrong, this is the problem
        const newAccessToken = signAccessToken({
          id: refreshPayload.id,
          role: refreshPayload.role,
        });

        res.cookie("access_token", newAccessToken, {
          httpOnly: true,
          secure: isProduction,
          sameSite: isProduction ? "none" : "lax",
          path: "/",
          maxAge: 15 * 60 * 1000,
        });

        const payload = await getUserData(refreshPayload.id);

        return res
          .status(200)
          .json({ message: "New access token issued", payload });
      } catch (err) {
        return res
          .status(401)
          .json({ error: "Refresh token expired, login again" });
      }
    }

    // 2. Access token exists
    const accessPayload = jwt.verify(
      accessToken,
      process.env.JWT_ACCESS_SECRET
    );
    const payload = await getUserData(accessPayload.id);

    return res.status(200).json({ message: "success", payload });
  } catch (err) {
    return res.status(401).json({ error: "Token invalid or expired" });
  }
}

module.exports = { login, logout, checkToken };
