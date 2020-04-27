const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./user.model");
const UserService = require('./user.service')

exports.user_signup = (req, res, next) => {

  // res.status(200).json({ msg: "user_signup works" })
  var main = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$');

  if(req.body.firstName==='' || req.body.lastName==='' || req.body.email==='' || !main.test(req.body.email) ||req.body.password==='' ){
    console.log("fields incorrect");
    res.status(200).send({
      message : 'Incorrect Fields'
    })
    
  }
  else {
    
    const data = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
  
    const savingUser = UserService.signUp(data);
    if(savingUser) {
      res.status(200).send({
        message : 'Successful'
      })
    }
    else{
      res.status(200).send({
        message : 'Failure'
      })
    }
    console.log("fields correct");
  }
  


};

exports.user_login = (req, res, next) => {
  res.status(200).json({ msg: "user_login works" })
};

exports.user_delete = (req, res, next) => {
  res.status(200).json({ msg: "user_delete works" })

};
