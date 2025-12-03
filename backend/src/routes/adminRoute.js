const express = require("express");
const adminRouter = express.Router();
const { changeRole, selectAllData, getVotingStatus, setVotingStatus } = require("../controllers/adminController");

adminRouter.post("/changeRole", changeRole);
adminRouter.get("/selectAll", selectAllData);
adminRouter.get("/getVotingStatus", getVotingStatus);
adminRouter.post("/setVotingStatus", setVotingStatus);

module.exports = adminRouter;