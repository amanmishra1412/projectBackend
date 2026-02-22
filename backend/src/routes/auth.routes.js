const express = require("express");
const { loginController, registerController } = require("../controller/auth.controller");
const authRouter = express.Router();

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);

module.exports = authRouter;