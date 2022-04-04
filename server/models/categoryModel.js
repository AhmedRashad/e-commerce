const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
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

module.exports = mongoose.model("Category", categorySchema);
