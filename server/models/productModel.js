const mongooose = require("mongoose");

const productSchema = new mongooose.Schema({
  name: {
    type: String,
    required: [true, "Pleace add a name"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Pleace add a price"],
  },
  description: {
    type: String,
    required: [true, "Pleace add a description"],
  },
  richdescription: {
    type: String,
    required: [true, "Pleace add a richdescription"],
  },
  image: {
    type: Array,
    required: [true, "Pleace add a image"],
    minlength: [4, "Pleace add a image"],
    maxlength: [4, "Pleace add a image"],
  },
  category: {
    type: mongooose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  brand: {
    type: mongooose.Schema.Types.ObjectId,
    ref: "Brand",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  reviwes: [
    {
      type: mongooose.Schema.Types.ObjectId,
      ref: "Reviwes",
    },
  ],
});

module.exports = mongooose.model("Product", productSchema);
