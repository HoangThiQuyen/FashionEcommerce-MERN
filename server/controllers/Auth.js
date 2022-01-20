const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  });
  try {
    const user = await newUser.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res, next) => {
  const { username } = req.body;
  try {
    const user = await User.findOne({ username: username });
    !user && res.status(401).send("wrong username");
    const hashPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    );
    const hash = hashPassword.toString(CryptoJS.enc.Utf8);
    hash !== req.body.password && res.status(401).send("wrong password");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    // C1
    // const userRes = await User.findOne({ username: username }).select(
    //   "-password"
    // );

    // C2
    const { password, ...others } = user._doc;

    res.status(200).send({ data: others, accessToken });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { register, login };
