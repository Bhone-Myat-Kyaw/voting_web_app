const express = require("express");
const voteRouter = express.Router();
const {
  vote,
  countVotes,
  selectCandidates,
} = require("../controllers/voteController");
const checkIsVotingOpen = require("../middleware/checkIsVotingOpen");

voteRouter.post("/postVote", checkIsVotingOpen, vote);
voteRouter.get("/countVotes", countVotes);
voteRouter.get("/selectCandidates", selectCandidates);

module.exports = voteRouter;
