const express = require("express");
const router = express.Router();
const { userRegisterValidation, throwValidationError } = require("./user.middleware");

const UserController = require('./user.controller');

router.get("/:id", UserController.getUser);

router.post("/register", userRegisterValidation, throwValidationError, UserController.registerUser);

router.post("/login", UserController.loginUser);

router.post("/forgetpass", UserController.forgotpassUser);

router.post("/userConfirmpass", UserController.confirmpassUser);

router.delete("/:userid", UserController.userDelete);

router.put("/", UserController.userUpdate);

module.exports = router;
