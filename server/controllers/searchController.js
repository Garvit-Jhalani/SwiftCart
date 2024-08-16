const Product = require("../models/Product");

exports.getProductsBySearch = async (req, res) => {
  try {
    const searchQuery = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { description: { $regex: req.query.search, $options: "i" } },
            // Add other fields if needed
          ],
        }
      : {};

    const products = await Product.find(searchQuery);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
