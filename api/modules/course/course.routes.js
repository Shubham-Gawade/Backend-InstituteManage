const express = require("express");
const router = express.Router();

const CourseController = require('../course/course.controller');


router.post("/courseRegistration", CourseController.createCourse);

router.get("/courseRead", CourseController.getCourses);

router.put("/courseUpdate", CourseController.updateCourse);

router.delete("/courseDelete/:id/:instid", CourseController.deleteCourse);

router.post("/courseSearch", CourseController.searchCourse);

module.exports = router;




module.exports = router;