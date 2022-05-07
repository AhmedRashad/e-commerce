const mongooose = require("mongoose");

const orderSchema = new mongooose.Schema({
  user: {
    type: mongooose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      type: mongooose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  total: {
    type: Number,
    required: [true, "Pleace add a total"],
  },
  status: {
    type: String,
    required: [true, "Pleace add a status"],
    default: "Pending",
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

module.exports = mongooose.model("Order", orderSchema);
