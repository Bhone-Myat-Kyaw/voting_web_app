require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRoute");
const adminRouter = require("./routes/adminRoute");
const voteRouter = require("./routes/voteRoute");
const adminMiddleware = require("../src/middleware/adminMiddleware");
const voteMiddleware = require("../src/middleware/voteMiddleware");

app.use(
  cors({
    origin: "http://localhost:5173", // React app URL
    credentials: true,               // allows sending cookies
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/admin", adminMiddleware, adminRouter);
app.use("/vote", voteMiddleware, voteRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 5000}`);
});
