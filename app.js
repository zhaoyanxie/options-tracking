require("dotenv").config();
const express = require("express");

const app = express();
const index = require("./routers/index");
const allTransactions = require("./routers/allTransactions");
const addTransaction = require("./routers/addTransaction");

app.use(express.json());

index(app);
allTransactions(app);
addTransaction(app);

module.exports = app;
