const express = require("express");
const router = express.Router();

//get logged in user - get
router.get("/", (req, res) => {
  res.send("get the loggeed in user");
});

//authenticate and login the user - post
router.post("/", (req, res) => {
  res.send("login the user");
});

module.exports = router;
