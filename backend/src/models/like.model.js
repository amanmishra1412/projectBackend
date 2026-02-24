const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: [true, "User id required"],
        },
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "posts",
            required: [true, "Post id required"],
        },
    },
    {
        timestamps: true,
    },
);

likeSchema.index({ user: 1, postId: 1 }, { unique: true });

const likeModel = mongoose.model("likes", likeSchema);
module.exports = likeModel;