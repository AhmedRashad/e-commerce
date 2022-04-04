const asyncHandler = require("express-async-handler");

const Brand = require("../models/brandModel");
const Category = require("../models/categoryModel");
const User = require("../models/userModel");

// @desc Get all brands
// @route GET /api/brands
// @access Public
const getBrands = asyncHandler(async (req, res) => {
  const brands = await Brand.find();
  res.status(200).json({
    success: true,
    count: brands.length,
    data: brands,
  });
});

// @desc add brand
// @route POST /api/brands
// @access Private
const addBrand = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  const category = await Category.findById(req.body.category);
  const brand = await Brand.create({
    ...req.body,
    user: user._id,
    category: category._id,
  });
  res.status(201).json({
    success: true,
    data: brand,
  });
});

// @desc update brand
// @route PUT /api/brands/:id
// @access Private
const updateBrand = asyncHandler(async (req, res) => {
  const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    data: brand,
  });
});

// @desc delete brand
// @route DELETE /api/brands/:id
// @access Private
const deleteBrand = asyncHandler(async (req, res) => {
  await Brand.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    data: {},
  });
});

module.exports = {
  getBrands,
  addBrand,
  updateBrand,
  deleteBrand,
};
