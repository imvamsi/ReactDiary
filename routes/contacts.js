const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const User = require("../models/User");
const Contact = require("../models/Contact");

const auth = require("../middleware/auth");

//get all the contacts
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (error) {
    res.status(500).send("server error");
  }
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
