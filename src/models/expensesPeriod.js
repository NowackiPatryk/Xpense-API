const mongoose = require("mongoose");
const { Schema } = mongoose;
const expenseSchema = require("../schemas/expense");

const schemaConfig = {
    timestamps: true,
};

const expensesPeriodSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        userId: {
            type: String,
            required: true,
        },

        expenses: [expenseSchema],
    },
    schemaConfig
);

const ExpensesPeriod = mongoose.model("expensesPeriod", expensesPeriodSchema);

module.exports = ExpensesPeriod;
