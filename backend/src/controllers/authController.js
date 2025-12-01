const bcrypt = require("bcrypt");
const supabase = require("../config/supabase");
const jwt = require("jsonwebtoken");
const getUserData = require("../utils/getUserData");

// Register student
async function login(req, res) {
  try {
    const { admissionid, password } = req.body;

    // Fetch student
    const { data, error } = await supabase
      .from("students")
      .select("name, gender, admissionid, passwordhash, role")
      .eq("admissionid", admissionid);

    if (error) return res.status(400).json({ error: error.message });

    if (!data || data.length === 0) {
      return res.status(400).json({ error: "Invalid admission ID" });
    }

    const student = data[0];

    // Compare passwords
    const isMatch = await bcrypt.compare(String(password), student.passwordhash);
    if (!isMatch) {
      return res.status(400).json({ error: "Wrong Password" });
    }

    // JWT payload should identify the user
    const accessToken = jwt.sign(
      { admissionid: student.admissionid, role: student.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign(
      { admissionid: student.admissionid, role: student.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '7d' }
    );

    // Set cookie
    return res
      .cookie("access_token", accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
        maxAge: 15 * 60 * 1000
      })
      .cookie("refresh_token", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000
      })
      .json({
        message: "Login successful",
        student: {
          name: student.name,
          gender: student.gender,
          admissionid: student.admissionid
        },
        redirectUrl: student.role == 'student' ? '/vote' : '/admin'
      });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function logout(req, res) {
  try {
    return res.clearCookie("access_token", { httpOnly: true, secure: true, sameSite: "none" })
              .clearCookie("refresh_token", { httpOnly: true, secure: true, sameSite: "none" })
              .status(200)
              .json({ message: "Logged out successfully" });
  } catch(error) {
    return res.status(500).json({ error: error.message });
  }
}

async function checkToken(req, res) {
  try {
    const accessToken = req.cookies.access_token;
    const refreshToken = req.cookies.refresh_token;

    // 1. No access token
    if (!accessToken) {
      if (!refreshToken) {
        return res.status(401).json({ error: "No tokens, please login." });
      }

      try {
        const refreshPayload = jwt.verify(refreshToken, process.env.JWT_SECRET_KEY);

        const newAccessToken = jwt.sign(
          { admissionid: refreshPayload.admissionid, role: refreshPayload.role },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "15m" }
        );

        res.cookie("access_token", newAccessToken, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
          path: "/",
          maxAge: 15 * 60 * 1000
        });

        const payload = await getUserData(refreshPayload.admissionid);

        return res.status(200).json({ message: "New access token issued", payload });
      } catch (err) {
        return res.status(401).json({ error: "Refresh token expired, login again" });
      }
    }

    // 2. Access token exists
    const accessPayload = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    const payload = await getUserData(accessPayload.admissionid);

    return res.status(200).json({ message: "success", payload });

  } catch (err) {
    return res.status(401).json({ error: "Token invalid or expired" });
  }
}



module.exports = { login, logout, checkToken };
