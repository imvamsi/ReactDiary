//middleware fires to see if there's a token in the header

const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  //get the token from the header

  const token = req.header("x-auth-token");
  //check if the token doesn't exist

  if (!token) {
    return res.status(401).json({ msg: "no token access denied" });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "token not valid" });
  }
};
