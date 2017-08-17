const express = require('express');
const router = express.Router();

router.use('/users', require('./users_router'));
router.use('/tutors', require('./tutors_router'));

module.exports = router;
