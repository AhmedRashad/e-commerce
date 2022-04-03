const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protectAdmin = asyncHandler(async (req, res, next) => {
  const user = req.user;
  if (user.admin) {
    next();
  } else {
    res.status(403);
    throw new Error("Not authorized");
  }
});
module.exports = { protectAdmin };
