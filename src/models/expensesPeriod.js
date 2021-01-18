const mongoose = require("mongoose");
const expenseSchema = require("../schemas/expense");
const { Schema } = mongoose;

const schemaConfig = {
    timestamps: true,
};

const expensesPeriodSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        expenses: [expenseSchema],
    },
    schemaConfig
);

const ExpensesPeriod = mongoose.model("ExpensesPeriod", expensesPeriodSchema);

module.exports = ExpensesPeriod;
