const db = require('../../database/db.json');
const { saveToDatabase } = require('../../database/utils');

const getAllExpenses = () => {
    try {
        return db.expenses;
    } catch (error) {
        throw Object.assign(
            new Error(error?.message || error),
            { status: error?.status || 500 }
        );
    }
}

const getOneExpense = (expenseId) => {
    try {
        const expense = db.expenses.find((exp) => exp.id == expenseId);
        if (!expense) {
            return;
        }
        return expense;
    } catch (error) {
        throw Object.assign(
            new Error(error?.message || error),
            { status: error?.status || 500 }
        );
    }
}

const getNextExpenseId = () => {
    try {
        const maxId = db.expenses.reduce((a, b) => a.id > b.id ? a : b).id;
        return maxId + 1;
    } catch (error) {
        throw Object.assign(
            new Error(error?.message || error),
            { status: error?.status || 500 }
        );
    }
}

const createOneExpense = (newExpense) => {
    try {
        db.expenses.push(newExpense);
        saveToDatabase(db);
        return newExpense;
    } catch (error) {
        throw Object.assign(
            new Error(error?.message || error),
            { status: error?.status || 500 }
        );
    }
}

const updateOneExpense = (expenseId, changes) => {
    try {
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
    } catch (error) {
        throw Object.assign(
            new Error(error?.message || error),
            { status: error?.status || 500 }
        );
    }
}

const deleteOneExpense = (expenseId) => {
    try {
        const indexToUpdate = db.expenses.findIndex((expense) => expense.id == expenseId);
        if (indexToUpdate === -1) {
            return;
        }

        db.expenses.splice(indexToUpdate, 1);
        saveToDatabase(db);
    } catch (error) {
        throw Object.assign(
            new Error(error?.message || error),
            { status: error?.status || 500 }
        );
    }
}

module.exports = {
    getAllExpenses,
    getOneExpense,
    getNextExpenseId,
    createOneExpense,
    updateOneExpense,
    deleteOneExpense,
}