const express = require("express");
const router = express.Router();
const {
  getCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryControlles");

const { protect } = require("../middleware/authMiddleware");
const { protectAdmin } = require("../middleware/adminMiddleware");

router.get("/", getCategories);
router.get("/:id", getCategory);
router.post("/", protect, protectAdmin, addCategory);
router.put("/:id", protect, protectAdmin, updateCategory);
router.delete("/:id", protect, protectAdmin, deleteCategory);

module.exports = router;
