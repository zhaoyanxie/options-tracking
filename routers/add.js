const express = require("express");
const addService = require("../services/addService");
const addController = require("../controllers/addController");

const router = express.Router();

router.use(express.json());

router.post("/", addService.addOption, addController.respondWithOptionAdded);

module.exports = app => {
  app.use("/add", router);
};
