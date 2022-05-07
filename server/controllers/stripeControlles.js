const asyncHandler = require("express-async-handler");

// @desc    post stripe payment
// @route   POST /api/stripe/payment
// @access  Private
const postStripePayment = asyncHandler(async (req, res) => {
  stripe.charges.create(
    {
      amount: req.body.amount,
      currency: "usd",
      source: req.body.token.id,
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});
