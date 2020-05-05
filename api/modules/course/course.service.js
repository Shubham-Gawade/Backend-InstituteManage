const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Course = require("./course.model");

const CourseService = this;

exports.createCourseDocument = (req) => {
  const data = new Course({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    durationType: req.body.durationType,
    durationValue: req.body.durationValue,
    fees: req.body.fees,
    Institute_id: req.body.Institute_id,
  });
  return data;
};

exports.createCourseService = async (courseData) => {
  const course = await Course.findOne({
    Institute_id: courseData.Institute_id,
    name: courseData.name,
  });
  if (course) {
    throw new Error("Course name already exist");
  } else {
    return await courseData.save();
  }
};

exports.getCourseService = async () => {
  const course = await Course.find({});
  if (course) {
    return course;
  } else {
    return false;
  }
};

exports.checkCourse = async (data) => {
  const course = await Course.findOne({
    _id: data.id
  });

  if (course) {
    return await Course.deleteOne({ _id: data.id });
  } else {
    throw new Error("Course does not exist ");
  }
};

exports.findCourse = async (body) => {
  const course = await Course.findOne({
    name: body.name,
    Institute_id: body.Institute_id,
  });
  if (course) {
    return course;
  } else {
    throw new Error("Course not exist");
  }
};

exports.checkCourseAndUpdate = async (body) => {
  const course = await Course.findOne({
    _id: body._id,
    Institute_id: body.Institute_id,
  });
  if (course) {
    return await Course.updateOne(
      { _id: body._id },
      {
        name: body.name,
        durationType: body.durationType,
        durationValue: body.durationValue,
        fees: body.fees,
      }
    );
  } else {
    throw new Error("Course cannot update");
  }
};

exports.findCourseService = async (data) => {
    const course = await Course.findOne({
      Institute_id: data.instid,
      name: data.courseName,
    });
  
    if (course) {
      return course;
    } else {
      throw new Error("Course does not exist ");
    }
  };
  