const express = require("express");
const router = express.Router();

const UserController = require('./user.controller');

router.post("/register", UserController.userRegister);

router.get("/login", UserController.userLogin);

router.post("/forgetpass", UserController.user_forgotpass);

router.get("/show", UserController.user_show);
//pass _id of user after login to next component
router.post("/confirmpass", UserController.user_confirmpass);

router.delete("/delete/:id",UserController.user_Delete);

module.exports = router;
