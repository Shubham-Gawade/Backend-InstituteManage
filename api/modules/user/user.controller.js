const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./user.model");
const UserService = require('./user.service');

exports.registerUser = async (req, res, next) => {
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

exports.loginUser = async (req, res, next) => {
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


exports.forgotpassUser = async (req, res, next) => {
  try {
    const data = new User({
      email: req.body.email,
      password: req.body.password,
    });
    const emailexist = await UserService.updateEmail(data);
    res.status(200).json({
      emailexist
    });
  }
  catch (error) {
    res.status(500).json({
      error,
      message: error.message
    });
  }

};

exports.getUser = async (req, res, next) => {
  try {
    const usersList = await UserService.getUser(req.params.id);
    res.status(200).json({
      usersList
    });
  }
  catch (error) {
    res.status(500).json({
      error,
      message: error.message
    });
  }
};

exports.confirmpassUser = async (req, res, next) => {
  try {
    const data = {
      _id: req.body._id,
      password: req.body.password,
      changepassword: req.body.changepassword
    };
    const passexist = await UserService.updatePassword(data);
    res.status(200).json({
      passexist
    });
  }
  catch (error) {
    res.status(500).json({
      error,
      message: error.message
    });
  }

};

exports.userDelete = async (req, res, next) => {

  try {
    const user_id = req.params.userid;
    const user_del = await UserService.deleteUser(user_id);

    if (user_del) {
      res.status(200).json({
        message: 'Successfully deleted'
      });
    }
    else {
      res.status(500).json({
        error,
        message: error.message
      });
    }

  } catch (error) {
    res.status(500).json({
      error,
      message: error.message
    });
  }

};

exports.userUpdate = async (req, res, next) => {
  try {
    console.log("req.body",req.body);
    const result = await UserService.updateUser(req.body);
    console.log("result",result);
    res.status(200).json({
      message: 'Successfully updated'
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message
    });
  }
};