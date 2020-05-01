const express = require("express");
const router = express.Router();

const UserController = require('./user.controller');

router.post("/register", UserController.userRegister);

router.get("/login", UserController.userLogin);

router.post("/forgetpass", UserController.user_forgotpass);

router.get("/show", UserController.user_show);
//pass _id of user after login to next component
router.post("/confirmpass", UserController.user_confirmpass);

router.delete("/delete/:userid",UserController.user_Delete);

router.put("/update/:userId", UserController.userUpdate);

module.exports = router;
