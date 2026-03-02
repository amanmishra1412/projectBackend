const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
    const { email, password, username, bio, profileImage } = req.body;

    const isExist = await userModel.findOne({
        $or: [{ email }, { username }],
    });

    if (isExist) {
        return res.status(409).json({ msg: "Already Exist" });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        email,
        username,
        bio,
        profileImage,
        password: hashPass,
    });

    const token = jwt.sign(
        {
            id: user._id,
            userName: user.username,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" },
    );

    res.cookie("token", token);

    res.status(201).json({
        msg: "Created",
        userData: {
            email: user.email,
            name: user.username,
            bio: user.bio,
            profileImage: user.profileImage,
        },
    });
};

const loginController = async (req, res) => {
    const { email, password, username } = req.body;

    const user = await userModel
        .findOne({
            $or: [{ email }, { username }],
        })
        .select("+password");

    if (!user) {
        return res.status(404).json({ msg: "User Not found" });
    }

    const comparePass = await bcrypt.compare(password, user.password);

    if (!comparePass) {
        return res.status(401).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign(
        {
            id: user._id,
            userName: user.username,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" },
    );

    res.cookie("token", token);

    res.status(200).json({
        msg: "Login Success",
        userData: {
            email: user.email,
            name: user.username,
            bio: user.bio,
            profileImage: user.profileImage,
        },
    });
};

const getMeController = async (req, res) => {
    const userId = req.user.id;
    const user = await userModel.findById(userId);

    res.status(200).json({
        userData: {
            name: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage,
        },
    });
};

module.exports = { registerController, loginController, getMeController };
