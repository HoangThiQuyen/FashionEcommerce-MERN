const express = require("express");
const cartRouter = express.Router();

const {
  createCart,
  updateCart,
  getListCart,
  deleteCart,
  getUserCart,
} = require("../controllers/Cart");
const VerifyToken = require("../middleware/VerifyToken");
const VerifyAuthorization = require("../middleware/VerifyAuthorization");
const verifyTokenAndAdmin = require("../middleware/VerifyTokenAndAdmin");

cartRouter.post("/", VerifyToken, createCart);

cartRouter.put("/:id", VerifyAuthorization, updateCart);

cartRouter.get("/", verifyTokenAndAdmin, getListCart);

cartRouter.get("/:userId", VerifyAuthorization, getUserCart);

cartRouter.delete("/:id", VerifyAuthorization, deleteCart);

module.exports = cartRouter;
