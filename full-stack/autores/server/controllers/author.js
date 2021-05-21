const { Author } = require('../models/Author');
const { UserModel } = require('../models/User');

const createAuthor = async (req, res) => {
    try {
        const { name, id } = req.body;
        const author = await Author.create({ name });
        const user = await UserModel.findById(id).exec();
        user.authors.push(author);
        const {primerasLetras: _pl} = user;
        const primerasLetras = _pl ? _pl + name.charAt(0) : name.charAt(0);
        user.primerasLetras = primerasLetras;
        await user.save();
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

const getAuthorsByUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findById(id).populate('authors').exec();
        res.json(user.authors);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

module.exports = { createAuthor, getAuthors, getAuthorsByUser };
