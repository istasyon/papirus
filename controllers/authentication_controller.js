const jwt = require('jwt-simple');
const User = require('../database/models/user');
const axios = require('axios');
const keys = require('../config/keys');

function tokenForUser(user) {
  const obj = {
    sub: user._id,
    iat: new Date().getTime()
  };
  return jwt.encode(obj, keys.jwtSecret);
}

exports.requireAuth = function(req, res, next) {
  const authHeader = req.get('Authorization');
  const jwtToken = jwt.decode(authHeader, keys.jwtSecret);
  const userId = jwtToken.sub;
  User.findById(userId, (err, user) => {
    if (err) {
      throw new Error(err);
    }
    if (!user) {
      return next(new Error('User not found.'));
    }
    req.user = user;
    next();
  });
};

exports.facebookAuth = function(req, res) {
  const facebookToken = req.body.token;
  axios
    .get(
      `https://graph.facebook.com/v2.10/me?fields=id,first_name,last_name,email&access_token=${facebookToken}`
    )
    .then(response => {
      const facebookId = response.data.id;
      const firstName = response.data.first_name;
      const lastName = response.data.last_name;
      const email = response.data.email;
      User.find({ facebookId }, (err, users) => {
        const user = users[0];
        if (err) {
          throw new Error(err);
        }
        if (!user) {
          const newUser = new User({
            facebookId,
            email,
            firstName,
            lastName
          });
          newUser.save(error => {
            if (error) {
              throw new Error(error);
            }
            return res.json({ token: tokenForUser(newUser), user: newUser });
          });
        } else {
          return res.json({ token: tokenForUser(user), user: user });
        }
      });
    })
    .catch(error => {
      return res.status(500).send(error);
    });
};

exports.googleAuth = (req, res) => {
  const googleToken = req.body.token;
  const url = `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${googleToken}`;
  axios
    .get(url)
    .then(response => {
      const googleId = response.data.sub;
      const email = response.data.email;
      User.find({ googleId }, (err, users) => {
        const user = users[0];
        if (err) {
          throw new Error(err);
        }
        if (!user) {
          const newUser = new User({
            googleId,
            email
          });
          newUser.save(err2 => {
            if (err2) {
              throw new Error(err2);
            }
            return res.json({ token: tokenForUser(newUser), user: newUser });
          });
        } else {
          return res.json({ token: tokenForUser(user), user: user });
        }
      });
    })
    .catch(error => {
      return res.status(500).send(error);
    });
};
