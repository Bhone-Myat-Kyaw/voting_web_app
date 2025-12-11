const express = require("express");
const voteRouter = express.Router();
const {
  vote,
  countVotes,
  selectCandidates,
} = require("../controllers/voteController");
const checkIsVotingOpen = require("../middleware/checkIsVotingOpen");

voteRouter.post("/postVote", checkIsVotingOpen, vote);
voteRouter.get("/countVotes", checkIsVotingOpen, countVotes);
voteRouter.get("/selectCandidates", checkIsVotingOpen, selectCandidates);

module.exports = voteRouter;
