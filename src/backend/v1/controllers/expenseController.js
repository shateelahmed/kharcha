const ExpenseService = require('../services/expenseService');

const getAllExpenses = (_req, res) => {
    try {
        const expenses = ExpenseService.getAllExpenses();
        res.send({
            data: expenses
        });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({
                message: error?.message || 'Something went wrong',
                error: error ? error : null,
            });
    }
}

const getOneExpense = (req, res) => {
    try {
        const { expenseId } = req.params;
        const expense = ExpenseService.getOneExpense(expenseId);
        res.send({
            data: expense
        });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({
                message: error?.message || 'Something went wrong',
                error: error ? error : null,
            });
    }
}

const createOneExpense = (req, res) => {
    try {
        const { body } = req;

        if (
            !body.item
            || !body.item_type
            || !body.price
        ) {
            res
                .status(422)
                .send({
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
        res
            .status(201)
            .send({
                data: createdExpense
            });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({
                message: error?.message || 'Something went wrong',
                error: error ? error : null,
            });
    }
}

const updateOneExpense = (req, res) => {
    try {
        const {
            body,
            params: { expenseId }
        } = req;
        const updatedExpense = ExpenseService.updateOneExpense(expenseId, body);
        res.send({
            data: updatedExpense
        });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({
                message: error?.message || 'Something went wrong',
                error: error ? error : null,
            });
    }
}

const deleteOneExpense = (req, res) => {
    try {
        const { params: { expenseId } } = req;
        ExpenseService.deleteOneExpense(expenseId);
        res.send({
            message: "Expense deleted."
        });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({
                message: error?.message || 'Something went wrong',
                error: error ? error : null,
            });
    }
}

module.exports = {
    getAllExpenses,
    getOneExpense,
    createOneExpense,
    updateOneExpense,
    deleteOneExpense,
};