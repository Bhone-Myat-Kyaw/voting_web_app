const express = require("express");
const adminRouter = express.Router();
const { changeRole, selectaAllData } = require("../controllers/adminController");

adminRouter.post("/changeRole", changeRole);
adminRouter.get("/selectAll", selectaAllData);

module.exports = adminRouter;