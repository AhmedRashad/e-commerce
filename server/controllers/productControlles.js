const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const Category = require("../models/categoryModel");
const Brand = require("../models/brandModel");
const User = require("../models/userModel");


// @desc    Get aggregate products
// @route   GET /api/products
// @access  Public
const getAggregateProducts = asyncHandler(async (req, res) => {
  const products = await Product.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "category",
        foreignField: "_id",
        as: "category",
      },
    },
    {
      $lookup: {
        from: "brands",
        localField: "brand",
        foreignField: "_id",
        as: "brand",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "user",
      },
    },
  ]);

  res.status(200).json(products);
});


// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (!product) {
    res.status(404).json({
      success: false,
      error: `Product not found with id ${req.params.id}`,
    });
  }
  res.status(200).json(product);
});

// @desc    Add product
// @route   POST /api/products
// @access  Private
const addProduct = asyncHandler(async (req, res) => {
  const categories = await Category.findById(req.body.category);
  const user = await User.findById(req.user.id).select("-password");
  const prand = await Brand.findById(req.body.brand);
  //parse the path to get the file name
  const path = req.files.map((file) => file.path);
  const filename = path.map((file) => file.replaceAll("\\", "/").slice(6));
  const product = await Product.create({
    ...req.body,
    image: filename,
    category: categories,
    brand: prand,
    user: user,
  });
  res.status(201).json(product);
});

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json(product);
});

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private
const deleteProduct = asyncHandler(async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    data: {},
  });
});

module.exports = {
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  getAggregateProducts,
};
