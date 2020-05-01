const express = require("express");
const router = express.Router();

const CourseController = require('../course/course.controller');
//create
//Read
//update
//delete
//search
//filterlist

router.post("/courseRegistration", CourseController.createCourse);

router.get("/courseRead", CourseController.getCourses);

//router.put("/courseUpdate", CourseController.course_update);

router.delete("/courseDelete/:id/:instid", CourseController.deleteCourse);

router.post("/courseSearch", CourseController.searchCourse);






module.exports = router;