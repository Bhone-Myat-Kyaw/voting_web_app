const jwt = require("jsonwebtoken");

function adminMiddleware(req, res, next) {
  const accessToken = req.cookies.access_token;
  const refreshToken = req.cookies.refresh_token;

  try {
    const payload = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    if (payload.role != 'admin') {
      return res.status(403).json({ message: "Forbidden: Only admin" });
    }
    return next();
  } catch (error) { // Fixed: should be 'error' not 'err'
    if (error.name === "JsonWebTokenError" && refreshToken) { // Fixed: error.name
      try {
        const payload = jwt.verify(refreshToken, process.env.JWT_SECRET_KEY);

        const newAccessToken = jwt.sign(
          { admissionid: payload.admissionid, role: payload.role },
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

        req.user = payload;
        if (payload.role != "admin") {
          return res.status(403).json({ message: "Forbidden: Only admin" });
        }
        return next();
      } catch {
        return res.status(401).json({ error: "Refresh token expired, login again" });
      }
    } else {
      return res.status(400).json({ message: "Invalid token" });
    }
  }
}

module.exports = adminMiddleware;