const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        default: "",
    },
    imgUrl: {
        type: String,
        required: [true, "Image Required"],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "User id required"],
    },
});

const postModel = mongoose.model("posts", postSchema);
module.exports = postModel;