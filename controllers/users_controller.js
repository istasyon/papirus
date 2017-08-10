const usersController = {};

usersController.users = (req, res) => {
  res.json({ message: 'USERS' });
};

module.exports = usersController;
