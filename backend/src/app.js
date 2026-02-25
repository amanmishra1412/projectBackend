const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const userRouter = require("./routes/user.routes");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:5173",
    }),
);

// routes
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
app.use("/api/users", userRouter);

module.exports = app;
