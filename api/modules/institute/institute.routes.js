const express = require("express");
const router = express.Router();


const InstituteController = require('./institute.controller');

router.get("/:ownerId", InstituteController.getInstitute);//done

router.post("/register", InstituteController.registerInstitute);//done

router.delete("/:instid", InstituteController.instituteDelete);

router.put("/:instId", InstituteController.instituteUpdate);

module.exports = router;
