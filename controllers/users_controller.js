exports.users = (req, res) => {
  res.json({ message: "USERS" });
};

exports.getUser = (req, res) => {
  res.json({ id: req.params.id });
};
