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


exports.user_forgotpass = (req, res, next) => {
  
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
}

exports.user_Delete = async (req, res, next) => {
  
  try {
    const user_id = req.params.userid;
    const user_del = await UserService.deleteUser(user_id);

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

exports.userUpdate = async (req, res, next) => {
  
  try {
    const userUpdate = await UserService.updateUser(req);

    if(userUpdate === true){
      res.status(200).json({
        message: 'Successfully updated'
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