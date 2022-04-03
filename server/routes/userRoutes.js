const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  logoutUser,
  makeAdmin,
} = require("../controllers/userControlles");
const { protect } = require("../middleware/authMiddleware");
const { protectAdmin } = require("../middleware/adminMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);
router.get("/logout", protect, logoutUser);
router.put("/:email/admin", protect, protectAdmin, makeAdmin);

module.exports = router;
