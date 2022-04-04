const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const User = require("../models/userModel");

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find();
  res.status(200).json({
    success: true,
    count: orders.length,
    data: orders,
  });
});

// @desc    Get single order
// @route   GET /api/orders/:id
// @access  Private
const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    res.status(404).json({
      success: false,
      error: `Order not found with id ${req.params.id}`,
    });
  }
  res.status(200).json({
    success: true,
    data: order,
  });
});

// @desc    Add order
// @route   POST /api/orders
// @access  Private
const addOrder = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  const product = await Product.findById(req.body.product);
  const order = await Order.create({
    ...req.body,
    user: user._id,
    product: product._id,
  });
  res.status(201).json({
    success: true,
    data: order,
  });
});

// @desc    Update order
// @route   PUT /api/orders/:id
// @access  Private
const updateOrder = asyncHandler(async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!order) {
    res.status(404).json({
      success: false,
      error: `Order not found with id ${req.params.id}`,
    });
  }
  res.status(200).json({
    success: true,
    data: order,
  });
});

// @desc    Delete order
// @route   DELETE /api/orders/:id
// @access  Private
const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  if (!order) {
    res.status(404).json({
      success: false,
      error: `Order not found with id ${req.params.id}`,
    });
  }
  res.status(200).json({
    success: true,
    data: order,
  });
});

// @desc    Get orders by user
// @route   GET /api/orders/user/:id
// @access  Private
const getOrdersByUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404).json({
      success: false,
      error: `User not found with id ${req.params.id}`,
    });
  }
  const orders = await Order.find({ user: req.params.id });
  res.status(200).json({
    success: true,
    count: orders.length,
    data: orders,
  });
});

// @desc    Get orders by product
// @route   GET /api/orders/product/:id
// @access  Private
const getOrdersByProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404).json({
      success: false,
      error: `Product not found with id ${req.params.id}`,
    });
  }
  const orders = await Order.find({ product: req.params.id });
  res.status(200).json({
    success: true,
    count: orders.length,
    data: orders,
  });
});

// @desc    Get orders by status
// @route   GET /api/orders/status/:status
// @access  Private
const getOrdersByStatus = asyncHandler(async (req, res) => {
  const orders = await Order.find({ status: req.params.status });
  res.status(200).json({
    success: true,
    count: orders.length,
    data: orders,
  });
});

// @desc    Get orders by date
// @route   GET /api/orders/date/:date
// @access  Private
const getOrdersByDate = asyncHandler(async (req, res) => {
  const orders = await Order.find({
    createdAt: {
      $gte: new Date(req.params.date),
    },
  });
  res.status(200).json({
    success: true,
    count: orders.length,
    data: orders,
  });
});

module.exports = {
  getOrders,
  getOrder,
  addOrder,
  updateOrder,
  deleteOrder,
  getOrdersByUser,
  getOrdersByProduct,
  getOrdersByStatus,
  getOrdersByDate,
};
