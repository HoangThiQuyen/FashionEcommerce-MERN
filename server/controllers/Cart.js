const Cart = require("../models/Cart");

const createCart = async (req, res) => {
  const cart = new Cart(req.body);

  try {
    await cart.save();
    res.status(201).send(cart);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getListCart = async (req, res) => {
  try {
    const listCart = await Cart.find();
    res.status(200).send(listCart);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUserCart = async (req, res) => {
  const { userId } = req.params;
  try {
    const cart = await Cart.findOne(userId);
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findById(id);
    await Cart.findOneAndDelete(id);
    res.status(200).send(cart);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createCart,
  updateCart,
  getListCart,
  deleteCart,
  getUserCart,
};
