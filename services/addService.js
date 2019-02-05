const Options = require("../models/options");

const addOption = async (req, res, next) => {
  const {
    symbol,
    expiryDate,
    strike,
    numberOfContracts,
    premium,
    currentPrice,
    fees,
    underlying
  } = req.body;
  const option = await Options.create({
    symbol,
    expiryDate,
    strike,
    numberOfContracts,
    premium,
    currentPrice,
    fees,
    underlying
  });
  req.option = option.toObject();
  next();
};

module.exports = { addOption };
