const { Router } = require('express');
const router = Router();

router.post('/register', require('./controllers/register'));
// router.post('/login')
// router.post('/logout')

module.exports = router;
