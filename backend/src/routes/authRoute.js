const express = require("express");
const authRouter = express.Router();
const { login, logout, checkToken } = require("../controllers/authController");

authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/checkToken", checkToken);

module.exports = authRouter;