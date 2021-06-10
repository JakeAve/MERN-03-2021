const { Router } = require('express');
const { validateToken } = require('../jwt');
const router = Router();

router.post('/register', require('./controllers/register'));
router.post('/login', require('./controllers/login'));
router.post('/logout', require('./controllers/logout'));
router.get('/refresh', require('./controllers/refresh'));

module.exports = router;
