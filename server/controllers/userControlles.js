const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// Generate jwt
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// @desc Register new user
// @route Post /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
 
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add fields");
  }
  // check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }
  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  const token = generateToken(user._id);
  console.log(token);
  res.cookie("token", token, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });
  console.log(user);
  
  res.status(201).json({
    name: user.name,
    email: user.email,
  
  });
})

// @desc Authenticate auser
// @route Post /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.cookie("token", generateToken(user._id), {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    res.json({
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("INvalid credentials");
  }
});

// @desc get user data
// @route Get /api/users
// @access private
const getMe = asyncHandler(async (req, res) => {
  const { name, email, admin } = req.user;
  res.status(200).json({ name, email, admin });
});

// @desc Logout user
// @route Get /api/users/logout
// @access private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("token", " ", {
    maxAge: 1,
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
  });
});

// @desc make user admin
// @route Put /api/users/:id/admin
// @access private
const makeAdmin = asyncHandler(async (req, res) => {
  const user = await User.findOne(req.params.email);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  user.admin = true;
  await user.save();
  res.status(200).json(user);
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
  logoutUser,
  makeAdmin,
};
