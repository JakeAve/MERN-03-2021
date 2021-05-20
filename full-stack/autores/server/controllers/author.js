const { Author } = require('../models/Author');
const { UserModel } = require('../models/User');

const createAuthor = async (req, res) => {
    try {
        const { name, id } = req.body;
        const author = await Author.create({ name });
        const user = await UserModel.findById(id).exec();
        const authors = user.authors || [];
        authors.push(author);
        user.authors = authors;
        await user.save();
        console.log({ user });
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

// const getAuthorsByUser = async (req, res) => {
//     try {
//         const {_id} = id;
//         const authors = await Author.find({}).exec();
//         res.json(authors);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json(err);
//     }
// };

module.exports = { createAuthor, getAuthors };
