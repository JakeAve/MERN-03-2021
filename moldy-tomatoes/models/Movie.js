const mongoose = require('mongoose');
const { ReviewSchema } = require('./Reviews');

const MovieSchema = mongoose.Schema({
    title: String,
    reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}],
    averageRating: Number,
});

const MovieModel = mongoose.model('Movie', MovieSchema);

module.exports = { MovieSchema, MovieModel };
