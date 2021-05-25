const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    content: String,
    rating: Number,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
});

const ReviewModel = mongoose.model('Review', ReviewSchema);

module.exports = { ReviewSchema, ReviewModel };
