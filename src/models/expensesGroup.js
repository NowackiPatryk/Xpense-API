const mongoose = require("mongoose");
const { Schema } = mongoose;
const expenseSchema = require("../schemas/expense");

const expensesGroupSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    userId: {
        type: String,
        required: true,
    },

    expenses: [expenseSchema],
});

module.exports = expensesGroupSchema;
