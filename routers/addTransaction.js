const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res, next) => {
  res.json({ message: "Add transaction." });
});

module.exports = app => {
  app.use("/addtransaction", router);
};
