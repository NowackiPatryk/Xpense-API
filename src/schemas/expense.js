const mongoose = require("mongoose");
const { Schema } = mongoose;

const expenseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    cost: {
        type: Number,
        required: true,
    },
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;