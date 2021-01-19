const express = require("express");
const router = express.Router();

const expensesGroupController = require("../controllers/expensesGroup");
const validateToken = require("../middleware/validateToken");

router.get(
    "/expenses/group/all",
    validateToken,
    expensesGroupController.getAll
);

router.post("/expenses/group", validateToken, expensesGroupController.create);

router.get(
    "/expenses/groups/:id",
    validateToken,
    expensesGroupController.getById
);

module.exports = router;
