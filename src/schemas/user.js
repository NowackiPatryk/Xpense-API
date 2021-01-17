const mongoose = require("mongoose");
const { Schema } = mongoose;
const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = new Schema({
  email: {
    type: String,
    required: "Email adress is required.",
    unique: true,
    trim: true,
    match: [emailRegExp, "Please fill a valid email adress"],
  },
  password: {
    type: String,
    required: "Please enter the password.",
    minLength: 6,
    maxLength: 15,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
