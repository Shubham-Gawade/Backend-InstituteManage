const express = require("express");
const router = express.Router();

const UserController = require('./user.controller');

router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

router.post("/forgetpass", UserController.user_forgotpass);

router.get("/show", UserController.user_show);
//pass _id of user after login to next component
router.post("/confirmpass", UserController.user_confirmpass);

module.exports = router;
