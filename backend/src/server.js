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

app.get("/health", (req, res) => {
  console.log("Health check OK");
  res
    .status(200)
    .json({ status: "healthy", timestamp: new Date().toISOString() });
});

// app.use(
//   cors({
//     origin: "https://ceit-welcome-2025-ytu.netlify.app", // React app URL
//     credentials: true, // allows sending cookies
//   })
// );
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like health checks, curl, postman)
    if (!origin) return callback(null, true);

    const allowedOrigins = [
      "https://ceit-welcome-2025-ytu.netlify.app",
      "http://localhost:5173", // Keep for local development
    ];

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"), false);
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/admin", middleware, checkRole, adminRouter);
app.use("/vote", middleware, voteRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 5000}`);
});
