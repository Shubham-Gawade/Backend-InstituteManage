const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./user.model");

const UserService = this;

exports.createUser = async (userData) => {
  const user = await User.findOne({ email: userData.email });
  if (user) {
    throw new Error("User already exist");
  } else {
    return await userData.save();
  }
};

exports.validateBody = (body) => {
  return true;
};

exports.createUserDoc = (req) => {
  const data = new User({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });
  return data;
};

exports.findUser = async (userData) => {
  const user = await User.findOne({
    email: userData.email,
    password: userData.password,
  });
  return user;
};

exports.loginUser = async (userData) => {
  const user = await UserService.findUser(userData);
  if (user) {
    return user;
  } else {
    throw new Error("Auth failed");
  }
};

exports.updateEmail = async (data) => {
  const emailexist = await User.findOne({ email: data.email });

  if (emailexist) {
    const updatepassword = await User.update(
      { email: data.email },
      { password: data.password }
    );
    if (updatepassword) {
      return true;
    }
  } else {
    return false;
  }
};
exports.updatePassword = async (data) => {
  const userexist = await User.findOne({ _id: data._id });

  if (userexist) {
    if (userexist.password === data.password) {
      const updatepassword = await User.update(
        { email: userexist.email },
        { password: data.changepassword }
      );
      if (updatepassword) {
        return true;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

exports.getUser = async () => {
  const comp = await User.find({});
  if (comp) {
    return comp;
  } else {
    return false;
  }
};

exports.deleteUserService = async (data) => {
  const userDelete = await User.deleteOne({ _id: data });

  if (userDelete) {
    return userDelete;
  } else {
    return false;
  }
};
