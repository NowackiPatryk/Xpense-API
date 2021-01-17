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

router.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    res.json({
      status: "error",
      error: "User with this combination not found",
    });
    return;
  }
  bcrypt.compare(password, user.password, (err, result) => {
    if (err) console.log(err);
    if (!result) {
      res.json({
        status: "error",
        error: "User with this combination not found",
      });
      return;
    }
    const tokenData = {
      id: user._id,
      email: user.email,
    };
    const token = jwt.sign({ tokenData }, process.env.JWT_KEY);
    res.json({ status: "success", token: token });
  });
});

module.exports = router;
