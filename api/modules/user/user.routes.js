const express = require("express");
const router = express.Router();

const UserController = require('./user.controller');

router.post("/userRegister", UserController.registerUser);

router.get("/userLogin", UserController.loginUser);

router.post("/userForgetpass", UserController.forgotpassUser);

router.get("/userGet", UserController.getUsers);

router.post("/userConfirmpass", UserController.confirmpassUser);

router.delete("/userDelete/:id",UserController.deleteUser);

module.exports = router;
