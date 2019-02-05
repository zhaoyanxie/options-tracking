const mongoose = require("mongoose");

const OptionsSchema = new mongoose.Schema({
  symbol: String,
  expiryDate: Date,
  premium: String,
  currentPrice: String,
  fees: String,
  underlying: {
    ticker: String,
    price: String
  }
});

const Options = mongoose.model("Options", OptionsSchema);

module.exports = Options;
