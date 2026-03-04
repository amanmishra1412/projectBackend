const express = require("express");
const postRouter = express.Router();
const {
    createPost,
    getPost,
    getDetailPost,
    likePost,
    unLikePost,
    feedPost,
} = require("../controller/post.controller");
const checkUser = require("../middlewares/auth.middleware");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

postRouter.post("/", upload.single("image"), checkUser, createPost);
postRouter.get("/", checkUser, getPost);
postRouter.get("/details/:postId", checkUser, getDetailPost);
postRouter.post("/like/:postId", checkUser, likePost);
postRouter.post("/unlike/:postId", checkUser, unLikePost);
postRouter.get("/feed", checkUser, feedPost);

module.exports = postRouter;