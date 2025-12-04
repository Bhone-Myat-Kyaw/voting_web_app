require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRoute");
const adminRouter = require("./routes/adminRoute");
const voteRouter = require("./routes/voteRoute");
const middleware = require("./middleware/middleware");
const checkRole = require("./middleware/checkRole");
const checkIsVotingOpen = require("./middleware/checkIsVotingOpen");

app.use(
  cors({
    origin: "https://ceit-welcome-2025-ytu.netlify.app", // React app URL
    credentials: true, // allows sending cookies
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/admin", middleware, checkRole, adminRouter);
app.use("/vote", middleware, voteRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 5000}`);
});
