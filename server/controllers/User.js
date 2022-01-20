const User = require("../models/User");

const editUser = async (req, res, next) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.decrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString();
  }
  try {
    const userUpdate = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(userUpdate);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getListUser = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().select("-password").sort({ _id: -1 }).limit(5)
      : await User.find().select("-password");
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).select("-password");

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).select("-password");
    await User.findByIdAndDelete(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

// thong ke nguoi dung
const getStarsUser = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  // $gte: lớn hơn
  // aggregate tuong tu group by
  /*
  $project : chỉ định các field mong muốn truy vấn.
  $match : chọn document mong muốn truy vấn. 
  $group: nhóm các document theo điều kiện nhất định
  */
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          // lấy tháng trong db
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: { _id: "$month", total: { $sum: 1 } },
      },
    ]);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { editUser, deleteUser, getUser, getListUser, getStarsUser };
