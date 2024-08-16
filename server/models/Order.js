const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  items: Array,
  totalAmount: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
