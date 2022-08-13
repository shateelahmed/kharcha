const ExpenseService = require('../services/expenseService');

const getAllExpenses = (_req, res) => {
    const expenses = ExpenseService.getAllExpenses();
    res.send({
        data: expenses
    });
}

const getOneExpense = (req, res) => {
    const { expenseId } = req.params;
    const expense = ExpenseService.getOneExpense(expenseId);
    res.send({
        data: expense
    });
}

const createOneExpense = (req, res) => {
    const { body } = req;

    if (
        !body.item
        || !body.item_type
        || !body.price
    ) {
        return res.status(422).send({
            message: "Invalid input"
        });
    }

    const newExpense = {
        item: body.item,
        item_type: body.item_type,
        price: body.price,
        purchased_at: body.purchased_at
    };

    const createdExpense = ExpenseService.createOneExpense(newExpense);
    res.status(201).send({
        data: createdExpense
    });
}

const updateOneExpense = (req, res) => {
    const {
        body,
        params: { expenseId }
    } = req;
    const updatedExpense = ExpenseService.updateOneExpense(expenseId, body);
    res.send({
        data: updatedExpense
    });
}

const deleteOneExpense = (req, res) => {
    const { params: { expenseId } } = req;
    ExpenseService.deleteOneExpense(expenseId);
    res.send({
        message: "Expense deleted."
    });
}

module.exports = {
    getAllExpenses,
    getOneExpense,
    createOneExpense,
    updateOneExpense,
    deleteOneExpense,
};