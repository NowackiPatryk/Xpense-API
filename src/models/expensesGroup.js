const mongoose = require("mongoose");
const expenseSchema = require("../schemas/expense");
const { Schema } = mongoose;

const expensesGroupSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    expenses: [expenseSchema],
});

const ExpensesGroup = mongoose.model("ExpensesGroup", expensesGroupSchema);

module.exports = ExpensesGroup;
