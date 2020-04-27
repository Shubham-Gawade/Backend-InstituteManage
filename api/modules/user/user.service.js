const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./user.model");

const UserService = this;

exports.createUser = async (userData) => {
    const user = await User.findOne({ email: userData.email });
    if (user) {
        throw new Error('User already exist');
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
}

exports.findUser = async (userData) => {
    const user = await User.findOne({ email: userData.email, password: userData.password });
    return user;
}

exports.loginUser = async (userData) => {
    const user = await UserService.findUser(userData);
    if (user) {
        return user;
    } else {
        throw new Error('Auth failed');
    }
}