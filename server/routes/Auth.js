const router = require("express");
const { register, login } = require("../controllers/Auth");
const authRouter = router.Router();

// Register
authRouter.post("/register", register);

authRouter.post("/login", login);

module.exports = authRouter;
