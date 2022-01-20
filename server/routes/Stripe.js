const express = require("express");
const stripeRouter = express.Router();
const { payment } = require("../controllers/Stripe");

stripeRouter.post("/payment", payment);

module.exports = stripeRouter;
