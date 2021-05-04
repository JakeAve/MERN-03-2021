const express = require('express');
const router = express.Router();

router.use('/users', require('./routes/users'));
router.use('/companies', require('./routes/companies'));
router.use('/user/company', require('./routes/newUserAndCompany'));

module.exports = router;
