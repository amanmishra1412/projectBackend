const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const createPost = async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ msg: "Token not provided" });
    }

    let decoded;

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return res.status(401).json({ msg: "User Not Authorized" });
    }

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), "file"),
        fileName: "Test",
        folder: "insta/posts",
    });

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: decoded.id,
    });

    res.status(200).json({ msg: "Post Create success", post });
};

const getPost = async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ msg: "Token not provided" });
    }

    let decoded;

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return res.status(401).json({ msg: "User Not Authorized" });
    }

    const userId = decoded.id;
    const posts = await postModel.find({ user: userId });

    if (!posts) {
        return res.status(404).json({ msg: "Not Found" });
    }

    return res.status(200).json({ msg: "Post Fetched", posts });
};

const getDetailPost = async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ msg: "Token not provided" });
    }

    let decoded;

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return res.status(401).json({ msg: "User Not Authorized" });
    }

    const userId = decoded.id;
    const postId = req.params.id;

    const posts = postModel.findOne({ postId });

    const validUser = posts.user.toString() === userId;

    if (validUser) {
        return res.status(403).json({ msg: "Unauthorized" });
    }

    return res.status(200).json({ msg: "Fetched Success", posts });
};

module.exports = { createPost, getPost, getDetailPost };
