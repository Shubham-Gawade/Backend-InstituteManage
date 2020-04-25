const express = require("express");
const router = express.Router();

const ExampleController = require('./example.controller');

router.get("/", ExampleController.getExamples);

router.post("/", ExampleController.createExample);

router.put("/:id", ExampleController.updateExample);

router.delete("/:id", ExampleController.deleteExample);

module.exports = router;
