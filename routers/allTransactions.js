const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res, next) => {
  res.json({ message: "All transactions" });
});

module.exports = app => {
  app.use("/alltransactions", router);
};
