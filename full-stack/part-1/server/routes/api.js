const {Router} = require('express');
const router = Router();


router.post('/product', require('../controllers/postProduct'))

module.exports = router;