const mongoose = require("mongoose");
const { Schema } = mongoose;

const expensesGroupSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
});

const ExpensesGroup = mongoose.model("ExpensesGroup", expensesGroupSchema);

module.exports = ExpensesGroup;
