const db = require('../../database/db.json');
const { saveToDatabase } = require('../../database/utils');

const getAllExpenses = () => {
    return db.expenses;
}

const getOneExpense = (expenseId) => {
    const expense = db.expenses.find((exp) => exp.id == expenseId);
    if (!expense) {
        return;
    }
    return expense;
}

const getNextExpenseId = () => {
    const maxId = db.expenses.reduce((a, b) => a.id > b.id ? a : b).id;
    return maxId + 1;
}

const createOneExpense = (newExpense) => {
    db.expenses.push(newExpense);
    saveToDatabase(db);
    return newExpense;
}

const updateOneExpense = (expenseId, changes) => {
    const indexToUpdate = db.expenses.findIndex((expense) => expense.id == expenseId);
    if (indexToUpdate === -1) {
        return;
    }

    const updatedExpense = {
        ...db.expenses[indexToUpdate],
        ...changes,
    };

    db.expenses[indexToUpdate] = updatedExpense;
    saveToDatabase(db);

    return updatedExpense;
}

const deleteOneExpense = (expenseId) => {
    const indexToUpdate = db.expenses.findIndex((expense) => expense.id == expenseId);
    if (indexToUpdate === -1) {
        return;
    }

    db.expenses.splice(indexToUpdate, 1);
    saveToDatabase(db);
}

module.exports = {
    getAllExpenses,
    getOneExpense,
    getNextExpenseId,
    createOneExpense,
    updateOneExpense,
    deleteOneExpense,
}