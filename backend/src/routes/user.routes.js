const express = require("express");
const { followUser } = require("../controller/user.controller");
const checkUser = require("../middlewares/auth.middleware");
const userRouter = express.Router();

userRouter.post("/follow/:userName", checkUser, followUser);

module.exports = userRouter;