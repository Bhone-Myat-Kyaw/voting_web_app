require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRoute");
const adminRouter = require("./routes/adminRoute");
const voteRouter = require("./routes/voteRoute");
const adminMiddleware = require("./middleware/adminMiddleware");
const voteMiddleware = require("./middleware/voteMiddleware");

app.use(
  cors({
    origin: "http://localhost:5173", // React app URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // allows sending cookies
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
// app.options("*", cors());

app.use(express.json());
app.use(cookieParser());

app.use("/auth", (req, res) => {
  res.send("hello");
  console.log("Auth endpoint");
});
app.use("/admin", adminRouter);
app.use("/vote", voteRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server running on http://localhost:${process.env.PORT || 5000}.....`
  );
});
