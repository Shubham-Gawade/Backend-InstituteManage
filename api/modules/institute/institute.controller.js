const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Institute = require("./institute.model");
const InstituteService = require('./institute.services');

exports.registerInstitute = async (req, res, next) => {
  try {
    const instituteData = InstituteService.createInstituteDoc(req);
    const institute = await InstituteService.createInstitute(instituteData);
    res.status(200).json({
      institute
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message
    });
  }
};

exports.findInstituteId = async (req, res, next) => {
  try {
    const institute = await InstituteService.findId(req.body);
    res.status(200).json({
      institute
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message
    });
  }
};


exports.getInstitutes = async (req, res, next) => {
    //Retreiving using institute id
    const ownerId = req.params.ownerId;
    
    try {
        const instituteList = await InstituteService.getInstitutes(ownerId);
        res.status(200).json({
        instituteList
        });
    }
    catch (error) {
        res.status(500).json({
        error,
        message: error.message
        });
    }
};

exports.getInstitute = async (req, res, next) => {
  //Retreiving using institute id
  const instituteId = req.params.instituteId;
  
  try {
      const institute = await InstituteService.getInstitute(instituteId);
      res.status(200).json({
      institute
      });
  }
  catch (error) {
      res.status(500).json({
      error,
      message: error.message
      });
  }
};


exports.instituteDelete = async (req, res, next) => {
    //Deleting using institute id
  try {
    const instid = req.params.instid;
    const institute_del = await InstituteService.deleteInstitute(instid);

    if (institute_del) {
      res.status(200).json({
        message: 'Successfully deleted'
      });
    }
    else {
      res.status(500).json({
        error,
        message: error.message
      });
    }

  } catch (error) {
    res.status(500).json({
      error,
      message: error.message
    });
  }

};

exports.instituteUpdate = async (req, res, next) => {
  try {
    // delete req.body._id
    //Updating using institute id
    const condition = { _id: req.params.instId };
    const newInstituteData = req.body;
    const result = await InstituteService.updateInstitute(condition, newInstituteData);
    res.status(200).json({
      message: 'Successfully updated',
      result: result,
    });
  } catch (error) {
    res.status(500).json({
      error,
      message: error.message
    });
  }
};