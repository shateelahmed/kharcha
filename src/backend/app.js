const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const v1ExpenseRouter = require('./v1/routes/expenseRoutes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const v1RoutePrefix = '/api/v1';
app.use(`${v1RoutePrefix}/expenses`, v1ExpenseRouter);

module.exports = app;
