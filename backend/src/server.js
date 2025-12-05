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
    // Allow requests with no origin (like health checks, curl, postman, iOS Safari sometimes)
    if (!origin) return callback(null, true);

    const allowedOrigins = [
      "https://ceit-welcome-2025-ytu.netlify.app",
      "http://localhost:5173", // Keep for local development
    ];

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      // iOS Safari sometimes sends different origin formats
      if (
        origin.includes("netlify.app") &&
        process.env.NODE_ENV === "production"
      ) {
        return callback(null, true);
      }
      console.log("CORS blocked origin:", origin);
      return callback(new Error("Not allowed by CORS"), false);
    }
  },
  credentials: true,
  // ADD THESE FOR IOS SAFARI:
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Accept",
    "Origin",
    "X-Requested-With",
  ],
  exposedHeaders: ["Set-Cookie", "Date", "ETag"],
  maxAge: 86400, // 24 hours - iOS needs this for preflight cache
  optionsSuccessStatus: 204, // Some iOS clients prefer 204 instead of 200
};

// ADD THIS MIDDLEWARE FOR IOS SAFARI SPECIFIC HEADERS
// app.use((req, res, next) => {
//   const userAgent = req.headers["user-agent"] || "";
//   const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
//   const isSafari =
//     userAgent.includes("Safari") && !userAgent.includes("Chrome");

//   if (isIOS && isSafari) {
//     console.log("iOS Safari detected, adding extra headers");

//     // iOS Safari needs these explicit headers
//     res.setHeader("Cross-Origin-Embedder-Policy", "credentialless");
//     res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
//     res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");

//     // Prevent iOS from aggressively caching
//     res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
//     res.setHeader("Pragma", "no-cache");
//     res.setHeader("Expires", "0");

//     // For Set-Cookie to work on iOS
//     res.setHeader("Access-Control-Expose-Headers", "Set-Cookie");
//   }

//   // Handle preflight (OPTIONS) requests explicitly
//   if (req.method === "OPTIONS") {
//     console.log("Preflight request from:", userAgent);
//     return res.status(200).end();
//   }

//   next();
// });

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/admin", middleware, checkRole, adminRouter);
app.use("/vote", middleware, voteRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 5000}`);
});
