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


exports.user_forgotpass = (req, res, next) => {
  console.log("req.body",req.body)
  var main = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$');

  if(req.body.email==='' || !main.test(req.body.email) ||req.body.password==='' ){
    console.log("fields incorrect");
    res.status(200).send({
      message : 'Incorrect Fields'
    })
    
  }
  else{
    const data = new User({
      email: req.body.email,
      password: req.body.password,
    });
    const emailexist = UserService.updateEmail(data);

    if(!emailexist) {
      return res.status(404).json({
        msg : "Email Does not exist"
      });
    }
    else{
      res.status(200).send({
        message : 'password changed'
      })
      
    }
  }

};

exports.user_show = async (req, res, next) => {
  const comp = await UserService.show();
    
    if(!comp) {
      return res.status(404).json({
        msg : "show Failed"
      });
    }
    else{
      return res.status(201).json({
        msg : "show succes",
        comp:comp
      });
    }
    
};

exports.user_confirmpass = (req, res, next) => {
  console.log("req.body",req.body)
  var main = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$');

  if(req.body._id==='' || req.body.changepassword==='' || req.body.password===req.body.changepassword){
    console.log("fields incorrect");
    res.status(200).send({
      message : 'Incorrect Fields'
    })
    
  }
  else{
    const data = {
      _id: req.body._id,
      password: req.body.password,
      changepassword: req.body.changepassword
    };
    const passexist = UserService.updatePass(data);

    if(!passexist) {
      return res.status(404).json({
        msg : "pass incorrect"
      });
    }
    else{
      res.status(200).send({
        message : 'password changed'
      })
      
    }
  }

};
