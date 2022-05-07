const Order = require("../models/orderModel");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const asyncHandler = require("express-async-handler");

const checkoutSession = asyncHandler(async (req, res) => {
  const user = req.user;
  const { products } = req.body;
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
        quantity: 1,
      };
    }),
    customer_email: user.email,
    success_url: `${process.env.BASE_URL}/success?id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.BASE_URL}/cancel?id={CHECKOUT_SESSION_ID}`,
    shipping_address_collection: { allowed_countries: ["US"] },
  });
  res.status(200).json({
    sessionId: session.id,
  });
});

module.exports = { checkoutSession };
