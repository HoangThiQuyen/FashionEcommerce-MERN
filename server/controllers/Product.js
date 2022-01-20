const Product = require("../models/Product");

const createProduct = async (req, res) => {
  const product = new Product(req.body);

  try {
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getListProduct = async (req, res) => {
  const pNew = req.query.new;
  const pCategories = req.query.categories;
  try {
    let listProduct;
    if (pNew) {
      listProduct = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (pCategories) {
      listProduct = await Product.find({ categories: { $in: pCategories } });
    } else {
      listProduct = await Product.find();
    }
    res.status(200).send(listProduct);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    await Product.findOneAndDelete(id);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createProduct,
  updateProduct,
  getListProduct,
  deleteProduct,
  getProduct,
};
