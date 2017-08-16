const User = require('../models/user');

module.exports = (_id, userProps) => {
  return User.update({ _id }, userProps);
};
