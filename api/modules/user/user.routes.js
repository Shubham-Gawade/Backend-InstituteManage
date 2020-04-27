const express = require("express");
const router = express.Router();

const UserController = require('./user.controller');

router.post("/register", UserController.userRegister);

router.get("/login", UserController.userLogin);

module.exports = router;
