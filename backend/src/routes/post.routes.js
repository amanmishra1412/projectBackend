const express = require("express");
const postRouter = express.Router();
const { createPost } = require("../controller/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

postRouter.post("/", upload.single("image"), createPost);

module.exports = postRouter;
