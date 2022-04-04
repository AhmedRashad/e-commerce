const express = require("express");
const router = express.Router();

const {
  getOrders,
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder,
  getOrdersByUser,
  getOrdersByProduct,
  getOrdersByStatus,
  getOrdersByDate,
} = require("../controllers/orderControlles");

const { protect } = require("../middleware/authMiddleware");
const { protectAdmin } = require("../middleware/adminMiddleware");

router.get("/", protect, protectAdmin, getOrders);
router.get("/:id", protect, getOrder);
router.post("/", protect, protectAdmin, addOrder);
router.put("/:id", protect, protectAdmin, updateOrder);
router.delete("/:id", protect, protectAdmin, deleteOrder);
router.get("/user/:id", protect, protectAdmin, getOrdersByUser);
router.get("/product/:id", protect, protectAdmin, getOrdersByProduct);
router.get("/status/:status", protect, protectAdmin, getOrdersByStatus);
router.get("/date/:date", protect, protectAdmin, getOrdersByDate);

module.exports = router;
