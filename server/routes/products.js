const express = require("express");
const {
  addProduct,
  getProducts,
  getProductById,
} = require("../controllers/productController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", protect, addProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;
