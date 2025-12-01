const express = require("express");
const voteRouter = express.Router();
const { vote, countVotes, selectCandidates } = require("../controllers/voteController");

voteRouter.post("/postVote", vote);
voteRouter.get("/countVotes", countVotes);
voteRouter.get("/selectCandidates", selectCandidates);

module.exports = voteRouter;