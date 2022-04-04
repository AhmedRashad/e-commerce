const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const Category = require("../models/categoryModel");
const Brand = require("../models/brandModel");

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.aggregate();
  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
});

// @desc    Get aggregate products
// @route   GET /api/products/aggregate
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
      $unwind: {
        path: "$category",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $unwind: {
        path: "$brand",
        preserveNullAndEmptyArrays: true,
      },
    },

    {
      $project: {
        name: 1,
        price: 1,
        description: 1,
        richdescription: 1,
        image: 1,
        category: {
          name: "$category.name",
        },
        brand: {
          name: "$brand.name",
        },
      },
    },

    {
      $sort: {
        name: 1,
      },
    },

    {
      $skip: parseInt(req.query.skip),
    },
    {
      $limit: parseInt(req.query.limit),
    },

    {
      $group: {
        _id: null,
        count: { $sum: 1 },
        data: { $push: "$$ROOT" },
      },
    },

    {
      $unwind: {
        path: "$data",
        preserveNullAndEmptyArrays: true,
      },
    },

    {
      $project: {
        _id: 0,
        count: 1,
        data: {
          name: 1,
          price: 1,
          description: 1,
          richdescription: 1,
          image: 1,
          category: {
            name: "$data.category.name",
          },
          brand: {
            name: "$data.brand.name",
          },
        },
      },
    },
  ]);
  res.status(200).json({
    success: true,
    count: products.length,
    data: products,
  });
});

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404).json({
      success: false,
      error: `Product not found with id ${req.params.id}`,
    });
  }
  res.status(200).json({
    success: true,
    data: product,
  });
});

// @desc    Add product
// @route   POST /api/products
// @access  Private
const addProduct = asyncHandler(async (req, res) => {
  const categories = await Category.findById(req.body.category);
  const user = await User.findById(req.user.id).select("-password");
  const prand = await Brand.findById(req.body.brand);
  const product = await Product.create({
    ...req.body,
    user: user._id,
    category: categories._id,
    brand: prand._id,
  });
  res.status(201).json({
    success: true,
    data: product,
  });
});

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    data: product,
  });
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
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
