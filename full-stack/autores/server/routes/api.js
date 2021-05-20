const { Router } = require('express');
const { createAuthor, getAuthors } = require('../controllers/author');
const { createUser, getUser, login, logout } = require('../controllers/user');
const authenticate = require('../config/authenticate');
const router = Router();

router.post('/user', createUser);
router.get('/user/:id', getUser);
router.post('/login', login);
router.post('/logout', logout);
router.get('/author', getAuthors);
router.post('/author', createAuthor);

module.exports = router;
