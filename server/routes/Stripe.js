const router = require("express");
const stripeRouter = router.Router();
const { payment } = require("../controllers/Stripe");

router.post("/payment", payment);

module.exports = stripeRouter;
