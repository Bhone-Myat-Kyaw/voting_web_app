const express = require("express");
const authRouter = express.Router();
const { login, getStudents } = require("../controllers/authController");

authRouter.post("/login", login);
authRouter.get("/students", getStudents);

module.exports = authRouter;