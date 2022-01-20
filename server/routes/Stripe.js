const router = require("express");
const stripeRouter = router.Router();
const { payment } = require("../controllers/Stripe");

stripeRouter.post("/payment", payment);

module.exports = stripeRouter;
