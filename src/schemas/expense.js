const mongoose = require("mongoose");
const { Schema } = mongoose;

const expenseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },
});

module.exports = expenseSchema;
