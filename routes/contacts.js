const express = require("express");
const router = express.Router();

//get all the contacts
router.get("/", (req, res) => {
  res.send("get all the contacts");
});
//add new contact
router.post("/", (req, res) => {
  res.send("add new contact");
});
//update the contacts

router.put("/:id", (req, res) => {
  res.send("update contact");
});

//delete contact

router.put("/:id", (req, res) => {
  res.send("delete contact");
});

module.exports = router;
