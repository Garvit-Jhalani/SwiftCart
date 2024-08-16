const mongoose = require("mongoose");

const userActivitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, required: true },
  action: { type: String, required: true }, // 'view', 'add_to_cart', 'purchase'
  timestamp: { type: Date, default: Date.now },
});

const UserActivity = mongoose.model("UserActivity", userActivitySchema);

module.exports = UserActivity;
