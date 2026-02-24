const jwt = require("jsonwebtoken");

const checkUser = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ msg: "Token not provided" });
    }

    let decoded;

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return res
            .status(401)
            .json({ msg: "User Not Authorized", err: err.message });
    }

    req.user = decoded;
    next();
};

module.exports = checkUser;
