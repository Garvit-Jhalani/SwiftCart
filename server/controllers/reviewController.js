// const Review = require("../models/Review");
// const Product = require("../models/Product");

// // Add new review
// exports.addReview = async (req, res) => {
//   const { userId, userName, productId, rating, comment } = req.body;
//   const newReview = new Review({
//     userId,
//     userName,
//     productId,
//     rating,
//     comment,
//   });

//   try {
//     await newReview.save();
//     res.status(201).send("Review added successfully");
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

// // Get reviews for a product
// exports.getReviewsByProductId = async (req, res) => {
//   const { productId } = req.params;

//   try {
//     const reviews = await Review.find({ productId });
//     res.status(200).json(reviews);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };

// routes/reviewRoutes.js
const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const Order = require("../models/Order");

// Add a review
exports.addReview = async (req, res) => {
  const { userId, userName, productId, rating, comment } = req.body;

  // Check if the user has ordered the product
  const userOrders = await Order.find({ userId, "items.productId": productId });
  if (userOrders.length === 0) {
    return res
      .status(400)
      .json({ message: "User has not ordered this product" });
  }

  const newReview = new Review({
    userId,
    userName,
    productId,
    rating,
    comment,
  });

  try {
    await newReview.save();
    res.status(201).json({ message: "Review added successfully" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Get reviews for a product
exports.getReviewsByProductId = async (req, res) => {
  const { productId } = req.params;

  try {
    const reviews = await Review.find({ productId });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ error });
  }
};
