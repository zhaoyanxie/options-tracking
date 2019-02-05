const express = require("express");
const allService = require("../services/allService");
const allController = require("../controllers/allController");

const router = express.Router();
router.use(express.json());

router.get("/", allService.allOptions, allController.respondWithAllOptions);

module.exports = app => {
  app.use("/all", router);
};
