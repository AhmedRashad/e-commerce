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
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "Pleace add a category"],
  },
});

module.exports = mongoose.model("Brand", brandSchema);
