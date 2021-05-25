const { MovieModel } = require('../models/Movie');

const newMovie = async (req, res) => {
    try {
        const { title } = req.body;
        const movie = MovieModel({ title });
        await movie.save();

        res.status(201).json({_id: movie._id });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

const getAllMovies = async (req, res) => {
    try {
        const movies = await MovieModel.find().exec();
        res.json(movies);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

module.exports = { newMovie, getAllMovies };
