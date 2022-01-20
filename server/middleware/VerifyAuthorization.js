const verifyToken = require("./VerifyToken");

const verifyAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).send("You are not allowed to do that!");
    }
  });
};
module.exports = verifyAuthorization;
