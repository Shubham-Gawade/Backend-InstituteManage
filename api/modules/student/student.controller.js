const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const StudentService = require("../student/student.service");

exports.createStudent = async (req, res, next) => {
  try {
    const searchEmail = {
      email: req.body.email,
    };

    const studentData = await StudentService.getStudent(searchEmail);

    if (studentData) {
      return res.status(404).json({
        message: "Email already exist",
      });
    }

    const student = await StudentService.createStudentDoc(req.body);
    const saveStudent = await StudentService.createStudent(student);

    if (saveStudent) {
      res.status(200).json({ message: "Student Saved Successful" });
    } else {
      res.status(500).json({ message: "Student Saved failed" });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
};

exports.getStudents = async (req, res, next) => {
  try {
    const studentList = await StudentService.getStudents();

    if (!studentList) {
      return res.status(404).json({
        message: "Can not Display Students",
      });
    } else {
      return res.status(201).json({
        message: "Display Students Done",
        studentList: studentList,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
};

exports.getStudent = async (req, res, next) => {
  try {
    const student = await StudentService.getStudent(req.body);

    if (!student) {
      return res.status(404).json({
        message: "Can not Search Student",
      });
    } else {
      return res.status(201).json({
        message: "Student Search Done",
        student: student,
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
};

exports.deleteStudent = async (req, res, next) => {
  try {
    const id = req.params.id;

    const student = await StudentService.deleteStudent(id);

    if (!student) {
      return res.status(404).json({
        message: "Student not deleted",
      });
    } else {
      return res.status(201).json({
        message: "Student deleted",
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
};

exports.updateStudent = async (req, res, next) => {
  try {
    const studentData = await StudentService.getStudent(req.body);

    if (studentData) {
      return res.status(404).json({
        message: "Student not Found",
      });
    }

    const studentUpdate = await StudentService.updateStudent(req.body);

    if (!studentUpdate) {
      return res.status(404).json({
        message: "Student not Updated",
      });
    } else {
      return res.status(201).json({
        message: "Student Updated",
      });
    }
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
};
