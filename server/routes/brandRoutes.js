const express = require("express");
const router = express.Router();

const {
  getBrands,
  addBrand,
  updateBrand,
  deleteBrand,
} = require("../controllers/brandControlles");

const { protect } = require("../middleware/authMiddleware");
const { protectAdmin } = require("../middleware/adminMiddleware");
const { uploadHelper } = require("../middleware/uploadMiddleware");

router.get("/", getBrands);
router.post("/", protect, protectAdmin, uploadHelper, addBrand);
router.put("/:id", protect, protectAdmin, uploadHelper, updateBrand);
router.delete("/:id", protect, protectAdmin, deleteBrand);

module.exports = router;
