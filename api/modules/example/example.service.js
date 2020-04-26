const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Example = require("./example.model");

exports.getExamples = async () => {
    const test = [1, 2, 3, 4, 5]; // get data from db
    return test;
};