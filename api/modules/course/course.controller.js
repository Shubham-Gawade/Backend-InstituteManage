const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const CourseService = require("../course/course.service");
const Course = require("../course/course.model");

exports.createCourse = async (req, res, next) => {
  try {
    const courseData = CourseService.createCourseDocument(req);
    const course = await CourseService.createCourseService(courseData);
    res.status(200).json({
      course,
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
};

exports.getCourses = async (req, res, next) => {
  try {
    const course = await CourseService.getCourseService();

    res.status(200).json({
      course,
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
};

exports.findCourse = async (req, res, next) => {
    try {
      courseData={
          courseName:req.body.name,
          instid:req.body.instid
      }
      const course = await CourseService.findCourseService(courseData);
      res.status(200).json({
        course
      });
    } catch (error) {
      res.status(500).json({
        error,
        message: error.message,
      });
    }
  };
  
exports.deleteCourse = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = {
      id: id
    };
    
    const course = await CourseService.checkCourse(data);
    res.status(200).json({
      course,
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
};

exports.searchCourse = async (req, res, next) => {
  try {
    const course = await CourseService.findCourse(req.body);
    res.status(200).json({
      course,
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
};

exports.updateCourse = async (req, res, next) => {
  try {
    const course = await CourseService.checkCourseAndUpdate(req.body);
    res.status(200).json({
      course,
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message,
    });
  }
};
