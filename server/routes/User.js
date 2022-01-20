const express = require("express");
const userRouter = express.Router();
const {
  editUser,
  deleteUser,
  getUser,
  getListUser,
  getStarsUser,
} = require("../controllers/User");
const verifyAuthorization = require("../middleware/VerifyAuthorization");
const verifyTokenAndAdmin = require("../middleware/VerifyTokenAndAdmin");

userRouter.get("/stars", verifyTokenAndAdmin, getStarsUser);

userRouter.put("/:id", verifyAuthorization, editUser);

userRouter.get("/", verifyTokenAndAdmin, getListUser);

userRouter.get("/:id", verifyAuthorization, getUser);

userRouter.delete("/:id", verifyTokenAndAdmin, deleteUser);

module.exports = userRouter;
