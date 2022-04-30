const mongooose = require("mongoose");

const reviwesSchema = new mongooose.Schema({
  title: {
    type: String,
    required: [true, "A reviwes must have a title"],
    trim: true,
  },
  body: {
    type: String,
    required: [true, "Pleace add a text"],
  },
  rating: {
    type: Number,
    required: [true, "Pleace add a rating"],
  },
  user: {
    type: mongooose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  product: {
    type: mongooose.Schema.Types.ObjectId,
    ref: "Product",
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
});

module.exports = mongooose.model("Reviwes", reviwesSchema);
