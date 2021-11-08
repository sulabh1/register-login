const { User } = require("../models");
const { UserEntity } = require("../entity");

//Exception error
const errHandler = (res, err) => {
  console.log(err);
  res.status(400).json({
    err,
  });
};

//success handler
const success = (res, data) => {
  res.status(201).json({
    data,
  });
};

exports.register = async (req, res) => {
  try {
    const user = await new UserEntity(User).create(req);
    success(res, user);
  } catch (err) {
    errHandler(res, err);
  }
};
exports.login = async (req, res) => {
  try {
    await new UserEntity(User).loginUser(req);
    res.status(201).json({
      message: "user logged in successful",
    });
  } catch (err) {
    errHandler(res, err);
  }
};
