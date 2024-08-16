const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const session = require("express-session");
const cors = require("cors");
const path = require("path");

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
const _dirname = path.dirname("");
const buildPath = path.join(_dirname, "../client/dist");

app.use(express.static(buildPath));

const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");
const reviewRoutes = require("./routes/reviews");
const searchRoutes = require("./routes/search");
const orderRoutes = require("./routes/order");

mongoose
  .connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((err) => {
    console.error(err);
  });

// app.use(
//   session({
//     store: new RedisStore({ client: redisClient }),
//     secret: process.env.SESSION_SECRET || "your_session_secret",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       secure: false, // Set to true if using HTTPS
//       httpOnly: true,
//       maxAge: 1000 * 60 * 60 * 24, // 1 day
//     },
//   })
// );

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
