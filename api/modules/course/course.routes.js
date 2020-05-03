const express = require("express");
const router = express.Router();

const CourseController = require('../course/course.controller');


router.post("/", CourseController.createCourse);

router.get("/", CourseController.getCourses);

router.put("/", CourseController.updateCourse);

router.delete("/courseDelete/:id/:instid", CourseController.deleteCourse);

router.post("/courseSearch", CourseController.searchCourse);

module.exports = router;




module.exports = router;