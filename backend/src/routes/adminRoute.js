const express = require("express");
const adminRouter = express.Router();
const { changeRole, selectaAllData } = require("../controllers/adminController");
const adminMiddleware = require("../middleware/adminMiddleware");

adminRouter.post("/changeRole", adminMiddleware, changeRole);
adminRouter.get("/selectAll", adminMiddleware, selectaAllData);

module.exports = adminRouter;