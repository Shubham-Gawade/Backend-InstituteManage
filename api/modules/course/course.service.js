const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Course = require("./course.model");

const CourseService = this;

exports.createCourseDoc = (req) => {
    const data = new Course({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name ,
        durationType: req.body.durationType,
        durationValue: req.body.durationValue,
        fees: req.body.fees,
        Institute_id: req.body.Institute_id
    });
    return data;
}

exports.createCourse = async (courseData) => {
    const course = await Course.findOne({ Institute_id:courseData.Institute_id ,name: courseData.name });
    if (course) {
        throw new Error('Course name already exist');
    } else {
        return await courseData.save();
    }
};

exports.show = async () => {
    
    const course = await Course.find({ });
    if(course) {
        return course;
      }
    else{
        return false;
    }
};

exports.checkCourse = async(data) => {

    const course = await Course.findOne({Institute_id:data.instid, _id: data.id});

    if(course) {
        return await Course.deleteOne({_id: data.id})
        
    } else {
        throw new Error('Course does not exist ');
    }
};

exports.findCourse = async (body) => {
    const course = await Course.findOne({ name: body.name,Institute_id:body.Institute_id });
    if (course) {
        console.log(course)
        return course;
    } else {
        throw new Error('Course not exist');
    }
};
