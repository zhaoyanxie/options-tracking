require("dotenv").config();
const express = require("express");

const app = express();
const index = require("./routers/index");
const all = require("./routers/all");
const add = require("./routers/add");

app.use(express.json());

index(app);
all(app);
add(app);

module.exports = app;
