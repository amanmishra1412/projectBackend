const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "User Name already Exist"],
        required: [true, "User Name required"],
    },
    email: {
        type: String,
        unique: [true, "Email Name already Exist"],
        required: [true, "Email Name required"],
    },
    password: {
        type: String,
        required: [true, "Email Name required"],
    },
    bio: {
        type: String,
    },
    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/5brpfkfyy/download.jpg",
    },
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
