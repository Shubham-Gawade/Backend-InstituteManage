const express = require("express");
const router = express.Router();
const { userRegisterValidation, throwValidationError } = require("./user.middleware");

const UserController = require('./user.controller');

router.get("/", UserController.getUsers);

router.post("/register", userRegisterValidation, throwValidationError, UserController.registerUser);

router.get("/login", UserController.loginUser);

router.post("/forgetpass", UserController.forgotpassUser);

router.post("/userConfirmpass", UserController.confirmpassUser);

router.delete("/:userid", UserController.user_Delete);

router.put("/:userId", UserController.userUpdate);

module.exports = router;
