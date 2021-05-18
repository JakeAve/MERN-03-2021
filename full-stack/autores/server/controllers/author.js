const { Author } = require("../models/Author");

const createAuthor = async (req, res) => {
    try {
        const { name } = req.body;
        const author = await Author.create({name});
        res.json(author);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

const getAuthors = async (req, res) => {
    try {
        const authors = await Author.find({}).exec();
        res.json(authors);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

module.exports = { createAuthor, getAuthors };
