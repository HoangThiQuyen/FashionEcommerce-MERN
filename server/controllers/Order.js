const Order = require("../models/Order");

const createOrder = async (req, res) => {
  const order = new Order(req.body);

  try {
    await order.save();
    res.status(201).send(order);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).send(order);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getListOrder = async (req, res) => {
  try {
    const listOrder = await Order.find();
    res.status(200).send(listOrder);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUserOrder = async (req, res) => {
  const { userId } = req.params;
  try {
    const order = await Order.find(userId);
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);
    await Order.findOneAndDelete(id);
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send(error);
  }
};

// get monthly income
const getIncome = async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(date.setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      { $project: { month: { $month: "$createdAt" }, sales: "$amount" } },
      { $group: { _id: "$month", total: { $sum: "$sales" } } },
    ]);
    res.status(200).send(income);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createOrder,
  updateOrder,
  getListOrder,
  deleteOrder,
  getUserOrder,
  getIncome,
};
