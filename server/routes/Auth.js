const express = require("express");
const { register, login } = require("../controllers/Auth");
const authRouter = express.Router();

// Register
authRouter.post("/register", register);

authRouter.post("/login", login);

module.exports = authRouter;
