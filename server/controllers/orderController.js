const Order = require("../models/Order");

exports.addOrder = async (req, res) => {
  const { userId, userName, items, totalAmount } = req.body;
  const newOrder = new Order({ userId, userName, items, totalAmount });
  try {
    await newOrder.save();
    res.status(201).send("Order saved successfully");
  } catch (error) {
    res.status(400).send(error);
  }
};

// Retrieve Orders Endpoint
exports.getOrder = async (req, res) => {
  const { userId } = req.query;
  try {
    // const orders = await Order.find({ userId });
    const orders = await Order.find({ userId }).sort({ date: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).send(error);
  }
};
