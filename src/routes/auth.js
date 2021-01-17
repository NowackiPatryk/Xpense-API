const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const user = require("../schemas/user");

router.post("/auth/register", (req, res) => {
  const { email, password } = req.body;
});
