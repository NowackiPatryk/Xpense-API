const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../schemas/user");

router.post("/auth/register", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  const response = await User.create({
    email: email,
    password: hashedPassword,
  }).catch((err) => {
    console.log(err);
    res.json({ status: "error", error: err.toString() });
  });
  res.status(200).json({
    status: "success",
  });
});

module.exports = router;
