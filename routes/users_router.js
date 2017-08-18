const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');
const authenticationController = require('../controllers/authentication_controller');

router.get('/', usersController.users);
router.get('/:id', usersController.getUser);
router.post('/create', usersController.createUser);
router.post('/:id/update', usersController.editUser);
router.post('/:id/apply', usersController.applyTutor);

router.post('/facebook_auth', authenticationController.facebookAuth);
router.post('/google_auth', authenticationController.googleAuth);

router.get('/user', authenticationController.requireAuth, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
