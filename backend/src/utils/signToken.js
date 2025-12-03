const jwt = require("jsonwebtoken");

function signAccessToken(payload) {
  const accessToken = jwt.sign(
    {...payload}, 
    process.env.JWT_ACCESS_SECRET, 
    { expiresIn: "15m" }
  );
  return accessToken;
}

function signRefreshToken(payload) {
  const refreshToken = jwt.sign(
    {...payload},
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d"}
  );
  return refreshToken;
}

module.exports = { signAccessToken, signRefreshToken };