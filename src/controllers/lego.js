const lego = (req, res) => {
  console.warn('FIRED!');
  console.warn(req.body);
  res.json(req.body);
};

module.exports = {
  lego,
};
