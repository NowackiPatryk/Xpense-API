const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(400).json({
            status: "error",
            error: "auth failed",
        });
    }

    const token = req.headers.authorization.split(" ")[1]; //get authorization content after "Bearer "

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        req.decodedToken = decodedToken;
        next();
    } catch {
        res.status(400).json({
            message: "auth failed",
            status: "error",
        });
    }
};
