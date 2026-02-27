const express = require("express");
const authRouter = express.Router();
const {
    loginController,
    registerController,
    getMeController,
} = require("../controller/auth.controller");
const checkUser = require("../middlewares/auth.middleware");

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.get("/get-me", checkUser, getMeController);

module.exports = authRouter;