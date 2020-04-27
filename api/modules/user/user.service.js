const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./user.model");

exports.signUp = async (data) => {
    // const test = [1, 2, 3, 4, 5]; // get data from db
    console.log();
    
    const savingUser = await data.save()
    if(savingUser) {
        return true;
        // res.status(200).send.json({message: 'Successful'});
    }
    else {
        return false;
        // res.status(401).send.json({message: 'Failure'});
    }
    // return test;
};