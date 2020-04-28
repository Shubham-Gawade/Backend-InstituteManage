const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const StudentService = require("../student/student.service");
const Student = require("../student/student.model");

exports.student_signup = async (req, res, next) => {
  
  const alreadyEmailExist = await StudentService.alreadyEmail(req.body);

  if(!alreadyEmailExist){
    return res.status(404).json({
      msg : "Email already exist"
    });
  }

  const student =new Student({
    _id: new mongoose.Types.ObjectId(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    courses: req.body.courses
  });

  const saveStudent = await StudentService.register(student);

  if(saveStudent) {
    res.status(200).json({ msg: "Registration Successful" });
  } else {
    res.status(500).json({ msg: "Registration failed" });
  }
};

exports.student_display = async (req, res, next) => {
  
  const studentList = await StudentService.display();

  if(!studentList) {
    return res.status(404).json({
      msg: "Can not Display Students"
    });
  }
  else {
    return res.status(201).json({
      msg: "Display Students Done",
      studentList: studentList
    });
  }
};

exports.student_delete = async (req, res, next) => {
  
  const id=req.params.id;

  const student = await StudentService.delete(id);

  if(!student) {
    return res.status(404).json({
      msg: "Student not deleted"
    });
  }
  else {
    return res.status(201).json({
      msg: "Student deleted"
    });
  }
};

exports.student_update = async (req, res, next) => {

 const studentUpdate = await StudentService.update(req.body);

  if(!studentUpdate) {
    return res.status(404).json({
      msg: "Student not Updated"
    });
  }
  else {
    return res.status(201).json({
      msg: "Student Updated"
    });
  }
};

