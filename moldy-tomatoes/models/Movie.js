const mongoose = require('mongoose');
const { ReviewSchema } = require('./Reviews');

const MovieSchema = mongoose.Schema({
    title: { type: String, required: [true, 'El título es requerido'] },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    averageRating: { type: Number, min: 1, max: 5 },
});

const MovieModel = mongoose.model('Movie', MovieSchema);

module.exports = { MovieSchema, MovieModel };
