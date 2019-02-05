const respondWithAllOptions = (req, res, next) => {
  res.status(200).json({ "all options": req.all });
};
module.exports = { respondWithAllOptions };
