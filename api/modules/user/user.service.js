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

exports.updateEmail = async (data) => {
    // const test = [1, 2, 3, 4, 5]; // get data from db
    const emailexist = await User.findOne({email: data.email });

    if(emailexist){
        const updatepassword = await User.update({email: data.email},{password: data.password });
        if(updatepassword){
            return true;    
        }
    }
    else{
        return false;
    }
};
exports.updatePass = async (data) => {
    // const test = [1, 2, 3, 4, 5]; // get data from db
    const userexist = await User.findOne({_id: data._id });
    
    if(userexist){
        if(userexist.password === data.password){
            console.log("exist");
            console.log(data.changepassword)
            const updatepassword = await User.update({email: userexist.email},{password: data.changepassword });
            if(updatepassword){
                return true;    
            }
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
};

exports.show = async () => {
    
    const comp = await User.find({ });
    if(comp) {
        return comp;
      }
    else{
        return false;
    }
      
};