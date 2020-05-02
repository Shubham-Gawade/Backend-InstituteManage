const express = require("express");
const router = express.Router();

const UserController = require('./user.controller');

router.post("/userRegister", UserController.registerUser);

router.get("/userLogin", UserController.loginUser);

router.post("/userForgetpass", UserController.forgotpassUser);

router.get("/userGet", UserController.getUsers);

router.post("/userConfirmpass", UserController.confirmpassUser);

router.delete("/delete/:userid",UserController.user_Delete);

router.put("/update/:userId", UserController.userUpdate);

module.exports = router;
