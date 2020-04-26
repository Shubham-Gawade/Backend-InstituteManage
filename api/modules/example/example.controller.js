const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Example = require("./example.model");
const ExampleService = require('./example.service')

exports.getExamples = async (req, res, next) => {
  const test = await ExampleService.getExamples();
  res.status(200).json({ msg: "examples", data: test })
};

exports.createExample = (req, res, next) => {
  res.status(200).json({ msg: "createExample" })
};

exports.updateExample = (req, res, next) => {
  res.status(200).json({ msg: "updateExample" })
};


exports.deleteExample = (req, res, next) => {
  res.status(200).json({ msg: "deleteExample" })
};
