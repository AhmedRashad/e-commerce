const asyncHandler = require("express-async-handler");

const Product = require("../models/productModel");
const User = require("../models/userModel");
const Reviwes = require("../models/reviwesModel");

// @desc    Get all reviwes
// @route   GET /api/reviwes
// @access  private
const getReviwes = asyncHandler(async (req, res) => {
  const reviwes = await Reviwes.find();
  res.status(200).json({
    success: true,
    count: reviwes.length,
    data: reviwes,
  });
});

// @desc    Add reviwes
// @route   POST /api/reviwes
// @access  private
const addReviwes = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  const product = await Product.findById(req.body.product);

  const reviwes = await Reviwes.create({
    ...req.body,
    user: user._id,
    product: product._id,
  });
  res.status(201).json(reviwes);
});

// @desc    Update reviwes
// @route   PUT /api/reviwes/:id
// @access  private
const updateReviwes = asyncHandler(async (req, res) => {
  const reviwes = await Reviwes.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    success: true,
    data: reviwes,
  });
});

// @desc    Delete reviwes
// @route   DELETE /api/reviwes/:id
// @access  private
const deleteReviwes = asyncHandler(async (req, res) => {
  await Reviwes.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc    Get Reviwes by product 
// @route   GET /api/reviwes/product/:id
// @access  private
const getReviwesForProduct = asyncHandler(async (req, res) => {
  const reviwes = await Reviwes.find({ product: req.params.id }).populate(
    "user",
    "-password"
  );
  res.status(200).json({
    success: true,
    data: reviwes,
    count: reviwes.length,
  });
});

// @desc    Get Reviwes for a user
// @route   GET /api/reviwes/user/:id
// @access  private
const getReviwesForUser = asyncHandler(async (req, res) => {
  const reviwes = await Reviwes.find({ user: req.params.id });
  res.status(200).json({
    success: true,
    count: reviwes.length,
    data: reviwes,
  });
});

module.exports = {
  getReviwes,
  addReviwes,
  updateReviwes,
  deleteReviwes,
  getReviwesForProduct,
  getReviwesForUser,
};
