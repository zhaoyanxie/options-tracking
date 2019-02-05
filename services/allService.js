const Options = require("../models/options");

const allOptions = async (req, res, next) => {
  const all = await Options.find();
  req.all = all;
  next();
};

module.exports = { allOptions };
