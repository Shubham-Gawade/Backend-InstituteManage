const express = require("express");
const router = express.Router();

const StudentController = require("../student/student.controller");

router.post("/studentRegistration", StudentController.createStudent);

router.get("/studentDisplay", StudentController.getStudents);

router.get("/studentSearch/:id", StudentController.getStudent);

router.delete("/studentDelete/:id", StudentController.deleteStudent);

router.put("/studentUpdate", StudentController.updateStudent);

module.exports = router;
