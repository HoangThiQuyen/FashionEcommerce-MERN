const verifyToken = require("./VerifyToken");

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).send("You are not allowed to do that!");
    }
  });
};
module.exports = verifyTokenAndAdmin;
