const asyncHandler = require("express-async-handler");

const Category = require("../models/categoryModel");
const User = require("../models/userModel");

// @desc Get all categories
// @route GET /api/categories
// @access Public
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();
  res.status(200).json(categories);
});

// @desc add category
// @route POST /api/categories
// @access Private
const addCategory = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  const category = await Category.create({
    ...req.body,
    user: user._id,
  });
  res.status(201).json({
    success: true,
    data: category,
  });
});

// @desc update category
// @route PUT /api/categories/:id
// @access Private
const updateCategory = asyncHandler(async (req, res) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    data: category,
  });
});

// @desc delete category
// @route DELETE /api/categories/:id
// @access Private
const deleteCategory = asyncHandler(async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    data: {},
  });
});

module.exports = {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
};
