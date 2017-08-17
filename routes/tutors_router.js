const express = require('express');
const router = express.Router();

const tutorsController = require('../controllers/tutors_controller');

router.post('/', tutorsController.tutors);

module.exports = router;
