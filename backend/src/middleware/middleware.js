const jwt = require("jsonwebtoken");
const { signAccessToken } = require("../utils/signToken");

async function middleware(req, res, next) {
  const accessToken = req.cookies.access_token;
  const refreshToken = req.cookies.refresh_token;
  const isProduction = process.env.NODE_ENV === "production";

  try {
    const payload = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
    req.user = payload;

    return next();
  } catch (error) {
    if (refreshToken) {
      try {
        const payload = jwt.verify(
          refreshToken,
          process.env.JWT_REFRESH_SECRET
        );

        const newAccessToken = signAccessToken({
          id: payload.id,
          role: payload.role,
        });

        res.cookie("access_token", newAccessToken, {
          httpOnly: true,
          secure: isProduction,
          sameSite: isProduction ? "none" : "lax",
          path: "/",
          maxAge: 15 * 60 * 1000,
          ...(isProduction && { domain: "https://ceit-welcome-2025-ytu.netlify.app" })
        });

        req.user = payload;
        return next();
      } catch {
        return res.status(401).json({
          error: "Refresh token expired, login again",
          redirectUrl: "/login",
        });
      }
    } else {
      return res.status(400).json({ message: "Invalid token" });
    }
  }
}

module.exports = middleware;
