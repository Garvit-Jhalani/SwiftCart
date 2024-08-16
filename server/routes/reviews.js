const express = require("express");
const {
  addReview,
  getReviewsByProductId,
} = require("../controllers/reviewController");
const router = express.Router();

router.post("/add", addReview);
router.get("/:productId", getReviewsByProductId);

module.exports = router;
