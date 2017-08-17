const User = require('../models/user');

module.exports = tutorLength => {
  return User.find({ isTutor: true }).skip(+tutorLength).limit(10);
};
