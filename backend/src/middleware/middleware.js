const jwt = require("jsonwebtoken");
const { signAccessToken } = require("../utils/signToken");

async function middleware(req, res, next) {
  const accessToken = req.cookies.access_token;
  const refreshToken  = req.cookies.refresh_token;

  try {
    const payload = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
    req.user = payload;

    return next();
  } catch (error) {
    console.log(error.name);
    if (error.name === "TokenExpiredError" && refreshToken) {
      try {
        const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

        const newAccessToken  = signAccessToken({ id: payload.id, role: payload.role });

        res.cookies("access_token", newAccessToken, {
          httpOnly: true,
          secure: false,
          sameSite: "lax",
          path: "/",
          maxAge: 15 * 60 * 1000
        });

        req.user = payload;
        return next();
      } catch {
        return res.status(401).json({ error: "Refresh token expired, login again", redirectUrl: "/login" });
      }
    } else {
      return res.status(400).json({ message: "Invalid token" });
    }
  }
}

module.exports = middleware;