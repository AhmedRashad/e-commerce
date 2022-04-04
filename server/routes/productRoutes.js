const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControlles");

const { protect } = require("../middleware/authMiddleware");
const { protectAdmin } = require("../middleware/adminMiddleware");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", protect, protectAdmin, addProduct);
router.put("/:id", protect, protectAdmin, updateProduct);
router.delete("/:id", protect, protectAdmin, deleteProduct);

module.exports = router;
