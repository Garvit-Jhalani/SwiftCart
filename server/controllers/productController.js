const Product = require("../models/Product");

// Add new product
exports.addProduct = async (req, res) => {
  const { name, description, price, category, image } = req.body;
  try {
    const product = new Product({ name, description, price, category, image });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.searchProducts = async (req, res) => {
  const searchQuery = req.query.q;
  const userId = req.user.sub; // User's Auth0 ID

  // Log user search to the database
  await UserActivity.create({
    userId,
    action: "search",
    details: searchQuery,
  });

  // Perform search and return results
  const products = await Product.find({
    name: { $regex: searchQuery, $options: "i" },
  });
  res.json(products);
};
