const express = require('express');
const router = express.Router();
const ExpenseController = require('./../controllers/expenseController');

router.get('/', ExpenseController.getAllExpenses);

router.get('/:expenseId', ExpenseController.getOneExpense);

router.post('/', ExpenseController.createOneExpense);

router.patch('/:expenseId', ExpenseController.updateOneExpense);

router.delete('/:expenseId', ExpenseController.deleteOneExpense);

module.exports = router;
