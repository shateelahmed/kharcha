const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./v1/routes/index');
const usersRouter = require('./v1/routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'v1', 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
