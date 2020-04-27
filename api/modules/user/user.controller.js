const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./user.model");
const UserService = require('./user.service')

exports.userRegister = async (req, res, next) => {
  try {
    const userData = UserService.createUserDoc(req);
    const user = await UserService.createUser(userData);
    res.status(200).json({
      user
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message
    });
  }
};

exports.userLogin = async (req, res, next) => {
  try {
    userObject = {
      email: req.body.email,
      password: req.body.password
    }
    const user = await UserService.loginUser(userObject);
    res.status(200).json({
      user
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message
    });
  }
};

exports.userDelete = async (req, res, next) => {
  res.status(200).json({ msg: "user_delete works" })

};
