const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./user.model");
const UserService = require('./user.service')

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

exports.getUsers = async (req, res, next) => {
  try {
  const comp = await UserService.getUser();
  res.status(200).json({
    comp
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

exports.deleteUser = async (req, res, next) => {
  
  try {
    const id = req.params.id;
    const user_del = await UserService.deleteUserService(id);

    if(user_del){
    res.status(200).json({
      message: 'Successfully deleted'
    });
    }
    else{
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
