const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];
            //decodes token id
            //console.log(token);
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            //console.log(decoded);
            req.user = await User.findById(decoded.id).select("-password");
            // if (!req.user) {
            //   res.status(401);
            //   throw new Error("Not authorized, user not found");
            // }
            next();

        } catch (error) {
            //  console.error("Error during token verification:", error);
            //  if (error.name === "TokenExpiredError") {
            //    res.status(401).json({ message: "Token expired" });
            //  } else if (error.name === "JsonWebTokenError") {
            //    res.status(401).json({ message: "Invalid token" });
            //  } else {
            //    res
            //      .status(401)
            //      .json({ message: "Not authorized, token failed" });
            //  }
            // ;
          // throw new Error("Not authorized,token failed");
          res.status(401);
          throw new Error("Not authorized, token failed");
        }
      }
      if(!token){
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});
module.exports = { protect };