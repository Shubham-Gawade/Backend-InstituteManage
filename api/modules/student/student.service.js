const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Student = require("../student/student.model");

exports.alreadyEmail = async(data) => {

    const alreadyEmailExist = await Student.findOne({email: data.email});

    if(!alreadyEmailExist) {
        return true;
    } else {
        return false;
    }
};

exports.register = async(Student) => {

    const saveStudent = await Student.save();

    if(saveStudent) {
        return saveStudent;
    } else {
        return false;
    }
};

exports.display = async() => {

    const studentList = await Student.find({ });

    if(studentList) {
        return studentList;
    } else {
        return false;
    }
};

exports.delete = async(id) => {

    const studentDelete = await Student.deleteOne({_id:id });

    if(studentDelete) {
        return studentDelete;
    } else {
        return false;
    }
};

exports.update = async(data) => {

    const studentUpdate = await Student.update({_id:data._id} , {firstname:data.firstname , 
        lastname:data.lastname , email:data.email});

    if(studentUpdate) {
        return studentUpdate;
    } else {
        return false;
    }
};