const ExpensesGroup = require("../models/expensesGroup");

exports.getAll = async (req, res) => {
    const { tokenData } = req.decodedToken;
    const expensesGroups = await ExpensesGroup.find({ userId: tokenData.id });

    res.json({ expensesGroups });
};

exports.create = async (req, res) => {
    const { tokenData } = req.decodedToken;
    const { name, expenses } = req.body;

    const expensesGroup = await ExpensesGroup.create({
        userId: tokenData.id,
        name: name,
        expenses: expenses,
    }).catch((err) => {
        res.json({ status: "error", error: err.toString() });
    });

    res.json({ status: "success" });
};

exports.getById = async (req, res) => {
    const { id } = req.params;

    const expensesGroup = await ExpensesGroup.findById(id);

    res.json({ expensesGroup });
};

exports.updateById = async (req, res) => {
    const { id } = req.params;
    const { name, expenses } = req.body;
    const updateData = { name: name, expenses: expenses };

    const updatedExpensesGroup = await ExpensesGroup.findByIdAndUpdate(
        id,
        updateData
    );

    res.json({ updatedExpensesGroup });
};
