const postModel = require("../models/post.model");
const likeModel = require("../models/like.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const createPost = async (req, res) => {
    const userId = req.user.id;

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), "file"),
        fileName: "Test",
        folder: "insta/posts",
    });

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: userId,
    });

    res.status(200).json({ msg: "Post Create success", post });
};

const getPost = async (req, res) => {
    const userId = req.user.id;
    const posts = await postModel.find({ user: userId });

    if (!posts) {
        return res.status(404).json({ msg: "Not Found" });
    }

    return res.status(200).json({ msg: "Post Fetched", posts });
};

const getDetailPost = async (req, res) => {
    const userId = req.user.id;
    const postId = req.params.id;

    const posts = postModel.findOne({ postId });

    const validUser = posts.user.toString() === userId;

    if (validUser) {
        return res.status(403).json({ msg: "Unauthorized" });
    }

    return res.status(200).json({ msg: "Fetched Success", posts });
};

const likePost = async (req, res) => {
    try {
        const userName = req.user.userName;
        const postId = req.params.postId;

        const postExist = await postModel.findById(postId);

        if (!postExist) {
            return res.status(404).json({ msg: "Post not found" });
        }

        const alreadyExist = await likeModel.findOne({
            user: userName,
            postId: postId,
        });

        if (alreadyExist) {
            return res.status(409).json({ msg: "You already like this post" });
        }

        const likeRecord = await likeModel.create({
            user: userName,
            postId: postId,
        });

        return res.status(201).json({ msg: "You like this post", likeRecord });
    } catch (err) {
        return res.status(500).json({ msg: "Server error", err: err.message });
    }
};

module.exports = { createPost, getPost, getDetailPost, likePost };