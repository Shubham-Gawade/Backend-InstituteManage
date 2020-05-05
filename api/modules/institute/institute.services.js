const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Institute = require("./institute.model");

const InstituteService = this;

exports.createInstitute = async (instituteData) => {
  const institute = await Institute.findOne({ ownerId: instituteData.ownerId });
  if (institute) {
    throw new Error("Institute already exist");
  } else {
    return await instituteData.save();
  }
};

exports.validateBody = (body) => {
  return true;
};

exports.createInstituteDoc = (req) => {
  const data = new Institute({
    _id: new mongoose.Types.ObjectId(),
    instituteName: req.body.instituteName,
    instituteAddressLine1: req.body.instituteAddressLine1,
    instituteAddressLine2: req.body.instituteAddressLine2,
    state: req.body.state,
    city: req.body.city,
    pincode: req.body.pincode,
    ownerId: req.body.ownerId
  });
  return data;
};


exports.getInstitutes = async (owner_Id) => {
  const instituteList = await Institute.find({ownerId: owner_Id});
  if (instituteList) {
    return instituteList;
  } else {
    return false;
  }
};

exports.getInstitute = async (instituteId) => {
  const institute = await Institute.find({_id: instituteId});
  if (institute) {
    return institute;
  } else {
    return false;
  }
};

exports.deleteInstitute = async (data) => {

  const instituteDelete = await Institute.deleteOne({ _id: data });
  if (instituteDelete) {
    return instituteDelete;
  } else {
    return false;
  }
};

exports.updateInstitute = async (condition, newInstitureData) => {
  const result = await Institute.updateOne(condition, newInstitureData)
  return result
};

exports.findId = async (data) => {
  const institute = await Institute.findOne({ ownerId: data.ownerId });
  if (institute) {
    return institute;
  } else {
    throw new Error("Institute not exist");
  }
};
