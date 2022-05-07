const express = require("express");
const router = express.Router();

const { checkoutSession } = require("../controllers/stripeControlles");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, checkoutSession);

module.exports = router;
