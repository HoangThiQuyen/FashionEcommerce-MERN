const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51KDUXrIeYZ9mqRgNhqAmwl2oKRqAQjvu90ZZHM8Za5wqDueDREAtedg7gGWh1KZ2PpLv5t6Iicxi4oEdQ6XRoFod005DNTW7PM"
);

const payment = (req, res) => {
  // Create a PaymentIntent with the order amount and currency
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).send(stripeErr);
      } else {
        res.status(200).send(stripeRes);
      }
    }
  );
};
module.exports = { payment };
