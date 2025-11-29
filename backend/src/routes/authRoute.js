const express = require("express");
const authRouter = express.Router();
const { login, checkToken } = require("../controllers/authController");

authRouter.post("/login", login);
authRouter.get("/checkToken", checkToken);

module.exports = authRouter;