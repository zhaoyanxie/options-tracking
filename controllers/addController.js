const respondWithOptionAdded = (req, res, next) => {
  res.status(200).json({ added: req.option });
};
module.exports = { respondWithOptionAdded };
