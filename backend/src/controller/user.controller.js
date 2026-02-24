const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

const followUser = async (req, res) => {
    try {
        const userName = req.user.userName;
        const targetUserName = req.params.userName;

        if (userName === targetUserName) {
            return res.status(400).json({
                message: "You cannot follow yourself",
            });
        }

        const targetUser = await userModel.findOne({
            username: targetUserName,
        });

        if (!targetUser) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        const isAlreadyFollowed = await followModel.findOne({
            follower: userName,
            followee: targetUserName,
        });

        if (isAlreadyFollowed) {
            return res.status(409).json({
                message: "You already follow this user",
            });
        }

        const record = await followModel.create({
            follower: userName,
            followee: targetUserName,
        });

        return res.status(201).json({
            message: "User followed successfully",
            data: record,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            err: err.message,
        });
    }
};

module.exports = { followUser };
