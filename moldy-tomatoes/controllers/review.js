const { MovieModel } = require('../models/Movie');
const { ReviewModel } = require('../models/Reviews');
const { UserModel } = require('../models/User');

const newReview = async (req, res) => {
    try {
        const { createdBy, content, rating, movieId } = req.body;
        const user = await UserModel.findById(createdBy).exec();
        const review = ReviewModel({ createdBy: user, content, rating });
        await review.save();

        const movie = await MovieModel.findById(movieId).exec();
        const { reviews: _reviews } = await movie
            .populate('reviews')
            .execPopulate();
        // const { reviews: _reviews } = movie;
        const reviews = [..._reviews, review];
        const averageRating =
            reviews.reduce((acc, val) => {
                console.log({ acc, val });
                return acc + val.rating;
            }, 0) / reviews.length;
        console.log({ averageRating, reviews, movie });
        movie.averageRating = averageRating;
        movie.reviews.push(review);
        await movie.save();

        user.reviews.push(review);
        await user.save();
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

const getMovieReviews = async (req, res) => {
    try {
        const { movieId } = req.params;
        const { reviews } = await MovieModel.findById(movieId)
            .populate('reviews')
            .exec();

        const _reviews = reviews.map(async (review) => {
            try {
                const { createdBy, content, rating } = review;
                const user = await UserModel.findById(createdBy).exec();
                return { content, rating, createdBy: user.firstName };
            } catch (err) {
                throw err;
            }
        });

        const finishedReviews = await Promise.all(_reviews);

        res.json(finishedReviews);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

module.exports = { newReview, getMovieReviews };
