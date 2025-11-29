const express = require("express");
const adminRouter = express.Router();
const { changeRole, selectaAllData, selectCandidates } = require("../controllers/adminController");
const adminMiddleware = require("../middleware/adminMiddleware");

adminRouter.post("/changeRole", adminMiddleware, changeRole);
adminRouter.get("/selectAll", adminMiddleware, selectaAllData);
adminRouter.get("/selectCandidates", adminMiddleware, selectCandidates);

module.exports = adminRouter;