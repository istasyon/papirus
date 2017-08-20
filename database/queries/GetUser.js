const User = require('../models/user');

module.exports = async id => {
  const data = await User.findById(id);

  return data;
};
