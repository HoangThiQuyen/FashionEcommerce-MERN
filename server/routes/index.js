const express = require("express");
const cartRouter = require("./Cart");
const orderRouter = require("./Order");
const productRouter = require("./Product");
const userRouter = require("./User");
const authRouter = require("./Auth");
const stripeRouter = require("./Stripe");
const rootRouter = express.Router();

rootRouter.use("/product", productRouter);
rootRouter.use("/order", orderRouter);
rootRouter.use("/cart", cartRouter);
rootRouter.use("/auth", authRouter);
rootRouter.use("/user", userRouter);
rootRouter.use("/stripe", stripeRouter);

module.exports = rootRouter;
