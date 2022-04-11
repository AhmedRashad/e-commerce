const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Pleace add a name"],
  },
  description: {
    type: String,
    required: [true, "Pleace add a description"],
  },
  image: {
    type: String,
    required: [true, "Pleace add a image"],
  },
});

module.exports = mongoose.model("Brand", brandSchema);
