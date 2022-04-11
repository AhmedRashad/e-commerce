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
});

module.exports = mongoose.model("Category", categorySchema);
