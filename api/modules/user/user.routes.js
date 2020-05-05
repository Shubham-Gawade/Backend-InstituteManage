const express = require("express");
const router = express.Router();
const { userRegisterValidation, throwValidationError } = require("./user.middleware");

const UserController = require('./user.controller');

router.get("/", UserController.getUsers);

router.post("/register", userRegisterValidation, throwValidationError, UserController.registerUser);

router.post("/login", UserController.loginUser);

router.post("/findId", UserController.findUserId);

router.post("/forgetpass", UserController.forgotpassUser);

router.post("/userConfirmpass", UserController.confirmpassUser);

router.delete("/:userid", UserController.userDelete);

router.put("/:userId", UserController.userUpdate);

module.exports = router;
