const express = require('express');
const router = express.Router();

router.use('/users', require('./routes/users'));
router.use('/test', require('./routes/test'));

module.exports = router;
