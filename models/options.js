const mongoose = require("mongoose");

const OptionsSchema = new mongoose.Schema({
  symbol: String,
  expiryDate: Date,
  isExpired: { Boolean, default: false },
  strike: Number,
  numberOfContracts: Number,
  premium: Number,
  currentPrice: Number,
  fees: Number,
  underlying: {
    ticker: String,
    price: Number
  }
});

const Options = mongoose.model("Options", OptionsSchema);

module.exports = Options;
