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
const { uploadHelper } = require("../middleware/uploadMiddleware");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", protect, protectAdmin, uploadHelper, addProduct);
router.put("/:id", protect, protectAdmin, uploadHelper, updateProduct);
router.delete("/:id", protect, protectAdmin, deleteProduct);

module.exports = router;
