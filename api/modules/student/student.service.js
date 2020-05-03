const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Student = require("../student/student.model");

exports.createStudentDoc = (data) => {
  const student = new Student({
    _id: new mongoose.Types.ObjectId(),
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    courses: data.courses,
  });
  return student;
};

exports.createStudent = async (Student) => {
  const saveStudent = await Student.save();

  if (saveStudent) {
    return saveStudent;
  } else {
    return false;
  }
};

exports.getStudent = async (searchObject) => {
  const student = await Student.findOne(searchObject);

  if (!student) {
    return false;
  } else {
    return student;
  }
};

exports.getStudents = async () => {
  const studentList = await Student.find({});

  if (studentList) {
    return studentList;
  } else {
    return false;
  }
};

exports.deleteStudent = async (id) => {
  const studentDelete = await Student.deleteOne({ _id: id });

  if (studentDelete) {
    return studentDelete;
  } else {
    return false;
  }
};

exports.updateStudent = async (data) => {
  const studentUpdate = await Student.update(
    { _id: data._id },
    {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      courses: data.courses,
    }
  );

  if (studentUpdate) {
    return studentUpdate;
  } else {
    return false;
  }
};