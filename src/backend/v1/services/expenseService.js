const Expense = require('../models/expense');
const moment = require('moment');

const getAllExpenses = () => {
    return Expense.getAllExpenses();
}

const getOneExpense = (expenseId) => {
    return Expense.getOneExpense(expenseId);
}

const createOneExpense = (newExpense) => {
    const now = moment().utcOffset(360).format('YYYY-MM-DD HH:mm:ss');
    const expenseToInsert = {
        id: Expense.getNextExpenseId(),
        ...newExpense,
        created_at: now,
        updated_at: now,
    };

    if (!expenseToInsert.purchased_at) {
        expenseToInsert.purchased_at = now;
    }

    return Expense.createOneExpense(expenseToInsert);
}

const updateOneExpense = (expenseId, changes) => {
    const now = moment().utcOffset(360).format('YYYY-MM-DD HH:mm:ss');
    changes.updated_at = now;
    return Expense.updateOneExpense(expenseId, changes);
}

const deleteOneExpense = (expenseId) => {
    Expense.deleteOneExpense(expenseId);
}

module.exports = {
    getAllExpenses,
    getOneExpense,
    createOneExpense,
    updateOneExpense,
    deleteOneExpense,
}