const ExpensesGroup = require("../models/expensesGroup");
const handleMongoError = require("../helpers/handleMongoError");

exports.getAll = async (req, res) => {
    const { tokenData } = req.decodedToken;

    const expensesGroups = await ExpensesGroup.find({
        userId: tokenData.id,
    }).catch((err) => handleMongoError(err));

    res.json({ expensesGroups });
};

exports.create = async (req, res) => {
    const { tokenData } = req.decodedToken;
    const { name, expenses } = req.body;

    const expensesGroup = await ExpensesGroup.create({
        userId: tokenData.id,
        name: name,
        expenses: expenses,
    }).catch((err) => handleMongoError(err));

    res.json({ status: "success" });
};

exports.getById = async (req, res) => {
    const { id } = req.params;

    const expensesGroup = await ExpensesGroup.findById(id).catch((err) =>
        handleMongoError(err)
    );

    res.json({ expensesGroup });
};

exports.updateById = async (req, res) => {
    const { id } = req.params;
    const { name, expenses } = req.body;
    const updateData = { name: name, expenses: expenses };
    const callConfig = { new: true, runValidators: true };

    const updatedExpensesGroup = await ExpensesGroup.findByIdAndUpdate(
        id,
        updateData,
        callConfig
    ).catch((err) => handleMongoError(err));

    res.json({ updatedExpensesGroup });
};

exports.deleteById = async (req, res) => {
    const { id } = req.params;

    const deletedExpensesGroup = await ExpensesGroup.findByIdAndDelete(
        id
    ).catch((err) => handleMongoError(err));

    res.json({ status: "success" });
};
