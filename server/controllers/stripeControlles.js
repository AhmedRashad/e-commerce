const Order = require("../models/order");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const asyncHandler = require("express-async-handler");

const checkoutSession = asyncHandler(async (req, res) => {
  const user = req.user;
  const { products, shipping } = req.body;
  if (products.length === 0) throw new Error("No products found");
  const order = await Order.create({
    user: user._id,
    products,
    total: products.reduce((total, product) => {
      return total + product.price;
    }, 0),
    status: "Pending",
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: products.map((product) => {
      return {
        name: product.name,
        description: product.description,
        amount: product.price * 100,
        currency: "usd",
        quantity: product.quantity,
      };
    }),
    success_url: `${process.env.BASE_URL}success?session_id=${session.id}`,
    cancel_url: `${process.env.BASE_URL}cancel?session_id=${session.id}`,
  });
  res.status(201).json({
    success: true,
    data: session,
  });
});

export default checkoutSession;
