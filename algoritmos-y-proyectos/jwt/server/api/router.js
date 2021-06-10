const { Router } = require('express');
const { validateToken } = require('../jwt');
const router = Router();

router.get('/user', validateToken, require('./controller/getUser'));
router.get('/info', validateToken, (req, res) => {
    const user = req.user;

    console.log('usuario de toke', { user });

    res.json({ info: 'Secret Information' });
});

module.exports = router;
