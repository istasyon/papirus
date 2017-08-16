const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');

router.get('/', usersController.users);
router.get('/:id', usersController.getUser);
router.post('/create', usersController.createUser);
router.post('/:id/update', usersController.editUser);
router.post('/:id/apply', usersController.applyTutor);

module.exports = router;
