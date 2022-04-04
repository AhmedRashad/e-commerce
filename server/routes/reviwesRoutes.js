const express = require("express");
const router = express.Router();

const {
  getReviwes,
  addReviwes,
  updateReviwes,
  deleteReviwes,
  getReviwesForProduct,
  getReviwesForUser,
} = require("../controllers/reviwesControlles");

const { protect } = require("../middleware/authMiddleware");
const { protectAdmin } = require("../middleware/adminMiddleware");

router.get("/", protect, protectAdmin, getReviwes);
router.post("/", protect, addReviwes);
router.put("/:id", protect, protectAdmin, updateReviwes);
router.delete("/:id", protect, protectAdmin, deleteReviwes);
router.get("/product/:id", protect, getReviwesForProduct);
router.get("/user/:id", protect, protectAdmin, getReviwesForUser);

module.exports = router;
