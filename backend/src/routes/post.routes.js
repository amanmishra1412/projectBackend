const express = require("express");
const postRouter = express.Router();
const {
    createPost,
    getPost,
    getDetailPost,
} = require("../controller/post.controller");

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

postRouter.post("/", upload.single("image"), createPost);
postRouter.get("/", getPost);
postRouter.get("/details/:postId", getDetailPost);

module.exports = postRouter;