const User = require("./user.model");
const UserService = require("./user.service");
const InstituteService = require("../institute/institute.services");
const nodemailer = require('nodemailer');

exports.registerUser = async (req, res, next) => {
  try {
    const userData = UserService.createUserDoc(req);
    const user = await UserService.createUser(userData);
    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    userObject = {
      email: req.body.email,
      password: req.body.password,
    };
    const user = await UserService.loginUser(userObject);
    const institute = await InstituteService.findOne({ ownerId: user._id });
    res.status(200).json({
      user,
      institute,
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
};

exports.forgotpassUser = async (req, res, next) => {
  try {
    const data = new User({
      email: req.body.email,
    });

    const emailexist = await UserService.updateEmail(data);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "shubhamiit91@gmail.com",
        pass: "yjkdqshszjzuyvon"
      }
    });
    
    var mailOptions = {
      from: "shubhamiit91@gmail.com",
      to: emailexist,
      subject: 'Password Reset Link',
      text: `https://institute-management-server.herokuapp.com/resetPassword/${emailexist._id}`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    if (emailexist) {
      res.status(200).json({
        message: "Password Reset Link Sended on Your registered email",
      });
    } else {
      res.status(200).json({
        message: "Email does not Exist",
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const usersList = await UserService.getUser(req.params.id);
    res.status(200).json({
      usersList,
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
};

exports.confirmpassUser = async (req, res, next) => {
  try {
    const data = {
      _id: req.body._id,
      password: req.body.password,
    };

    const passexist = await UserService.updatePassword(data);
    res.status(200).json({
      passexist,
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
};

exports.userDelete = async (req, res, next) => {
  try {
    const user_id = req.params.userid;
    const user_del = await UserService.deleteUser(user_id);

    if (user_del) {
      res.status(200).json({
        message: "Successfully deleted",
      });
    } else {
      res.status(500).json({
        error,
        message: error.message,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
};

exports.userUpdate = async (req, res, next) => {
  try {
    const result = await UserService.updateUser(req.body);
    res.status(200).json({
      message: "Successfully updated",
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
};
