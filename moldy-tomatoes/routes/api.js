const { Router } = require('express');
const { newMovie, getAllMovies } = require('../controllers/movie');
const { newReview, getMovieReviews } = require('../controllers/review');
const { newUser } = require('../controllers/user');
const router = Router();

router.post('/user', newUser);
router.post('/review', newReview);
router.get('/review/:movieId', getMovieReviews);
router.post('/movie', newMovie);
router.get('/movie', getAllMovies);

module.exports = router;
