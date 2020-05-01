const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const CourseService = require("../course/course.service");
const Course = require("../course/course.model");

  exports.createCourse = async (req, res, next) => {
    try {
      const courseData = CourseService.createCourseDoc(req);
      const course = await CourseService.createCourse(courseData);
      res.status(200).json({
        course
      });
    } catch (error) {
      res.status(500).json({
        error,
        message: error.message
      });
    }
  };
  
  exports.getCourses = async (req, res, next) => {
    try{  
    const course = await CourseService.show();
      
    res.status(200).json({
        course
      });
    }
    catch (error) {
        res.status(500).json({
            error,
            message: error.message
          });
      }
      
  };
  
  exports.deleteCourse = async (req, res, next) => {
    try {
    const id=req.params.id;

    const instid=req.params.instid;
    console.log(instid)
    const data = {
        instid: instid,
        id: id
    }
    console.log(data)
    const course = await CourseService.checkCourse(data);
    res.status(200).json({
        course
      });
    }
    catch (error){
    res.status(500).json({
        error,
        message: error.message
      });
    }
  };

  exports.searchCourse = async (req, res, next) => {
    try {
      const course = await CourseService.findCourse(req.body);
      res.status(200).json({
        course
      });
    } catch (error) {
      res.status(500).json({
        error,
        message: error.message
      });
    }
  };
  
