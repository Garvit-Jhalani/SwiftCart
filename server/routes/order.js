const express = require("express");
const { addOrder, getOrder } = require("../controllers/orderController");
const router = express.Router();

router.post("/", addOrder);
router.get("/", getOrder);

module.exports = router;
