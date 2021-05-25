const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    content: {
        type: String,
        required: [true, 'La reseña es requerido'],
        minlength: [5, 'La reseña es muy corta'],
        maxlength: [250],
    },
    rating: {
        type: Number,
        min: [1, '1 es el mínimo'],
        max: [5, '5 es el máximo'],
    },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
});

const ReviewModel = mongoose.model('Review', ReviewSchema);

module.exports = { ReviewSchema, ReviewModel };
