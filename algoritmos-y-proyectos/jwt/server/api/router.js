const { Router } = require('express');
const { validateToken } = require('../jwt');
const router = Router();

router.get('/user/:id', validateToken, require('./controller/getUser'));
router.get('/info', validateToken, (req, res) => {
    res.json({ info: 'Secret Information' });
});

module.exports = router;
