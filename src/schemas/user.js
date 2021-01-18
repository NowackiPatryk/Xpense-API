const mongoose = require("mongoose");
const { Schema } = mongoose;
const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email adress is required."],
        unique: true,
        trim: true,
        match: [emailRegExp, "Please fill a valid email adress"],
    },

    password: {
        type: String,
        required: "Please enter the password.",
    },
});

userSchema.post("save", (err, doc, next) => {
    if (err.name === "MongoError" && err.code === 11000)
        next(new Error("User with this email already exist"));
    else next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
