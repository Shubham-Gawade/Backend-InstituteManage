const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Example = require("./example.model");

exports.getExamples = (req, res, next) => {
  res.status(200).json({ msg: "examples" })
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
