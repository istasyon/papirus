const express = require('express');
const router = express.Router();

router.use('/users', require('./users_router'));

module.exports = router;
