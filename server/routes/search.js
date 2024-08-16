const express = require("express");
const { getProductsBySearch } = require("../controllers/searchController");
const router = express.Router();

router.get("/", getProductsBySearch);

module.exports = router;
