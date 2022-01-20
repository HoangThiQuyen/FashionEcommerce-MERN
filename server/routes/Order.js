const express = require("express");
const orderRouter = express.Router();

const {
  createOrder,
  updateOrder,
  getListOrder,
  deleteOrder,
  getUserOrder,
  getIncome,
} = require("../controllers/Order");
const VerifyToken = require("../middleware/VerifyToken");
const VerifyAuthorization = require("../middleware/VerifyAuthorization");
const verifyTokenAndAdmin = require("../middleware/VerifyTokenAndAdmin");

orderRouter.post("/", VerifyToken, createOrder);

orderRouter.put("/:id", verifyTokenAndAdmin, updateOrder);

orderRouter.get("/", verifyTokenAndAdmin, getListOrder);

orderRouter.get("/income", verifyTokenAndAdmin, getIncome);

orderRouter.get("/:userId", VerifyAuthorization, getUserOrder);

orderRouter.delete("/:id", verifyTokenAndAdmin, deleteOrder);

module.exports = orderRouter;
