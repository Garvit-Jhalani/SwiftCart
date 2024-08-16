const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  productId: mongoose.Schema.Types.ObjectId,
  rating: Number,
  comment: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", reviewSchema);
