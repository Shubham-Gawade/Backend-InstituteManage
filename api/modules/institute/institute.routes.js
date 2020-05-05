const express = require("express");
const router = express.Router();


const InstituteController = require('./institute.controller');

router.get("/:ownerId", InstituteController.getInstitutes);//done

router.get("/getinstitute/:instituteId", InstituteController.getInstitute);

router.post("/register", InstituteController.registerInstitute);//done

router.post("/findInstituteId", InstituteController.findInstituteId);

router.delete("/:instid", InstituteController.instituteDelete);

router.put("/:instId", InstituteController.instituteUpdate);

module.exports = router;
