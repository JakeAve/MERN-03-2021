const { Router } = require('express');
const { createAuthor, getAuthors } = require('../controllers/author');
const { createUser, getUser, login } = require('../controllers/user');
const router = Router();

router.post('/user', createUser);
router.post('/login', login);
router.get('/user', getUser);
router.get('/author', getAuthors);
router.post('/author', createAuthor);

module.exports = router;
