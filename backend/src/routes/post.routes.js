const express = require("express");
const postRouter = express.Router();
const {
    createPost,
    getPost,
    getDetailPost,
} = require("../controller/post.controller");
const checkUser = require("../middlewares/auth.middleware");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

postRouter.post("/", upload.single("image"), checkUser, createPost);
postRouter.get("/", checkUser, getPost);
postRouter.get("/details/:postId", checkUser, getDetailPost);

module.exports = postRouter;