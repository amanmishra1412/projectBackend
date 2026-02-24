const followModel = require("../models/follow.model");

const followUser = async (req, res) => {
    const userName = req.user.userName;
    const secondUserName = req.params.userName;

    if (userName === secondUserName) {
        return res.status(200).json({ msg: "You cannot follow yourself" });
    }

    const isExist = await followModel.findOne({
        follower: secondUserName,
        followee: userName,
    });

    if (isExist) {
        return res.status(400).json({ msg: "Already Exist" });
    }

    const record = await followModel.create({
        follower: secondUserName,
        followee: userName,
    });

    return res.status(201).json({ msg: "Follow Success", record });
};

module.exports = { followUser };