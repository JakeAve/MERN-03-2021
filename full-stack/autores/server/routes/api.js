const { Router } = require('express');
const { createAuthor, getAuthors, getAuthorsByUser } = require('../controllers/author');
const { createUser, getUser, login, logout } = require('../controllers/user');
const authenticate = require('../config/authenticate');
const router = Router();

router.post('/user', createUser);
router.get('/user/:id', authenticate, getUser);
router.post('/login', login);
router.post('/logout', logout);
router.get('/author', getAuthors);
router.post('/author', authenticate, createAuthor);
router.get('/authors-by-user/:id', authenticate, getAuthorsByUser);

module.exports = router;
