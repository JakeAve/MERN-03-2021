const { Schema, model } = require('mongoose');

const AuthorSchema = Schema({
    name: {
        type: String,
        required: [true, 'Author name is required'],
        minlength: [3, 'Author name needs to be at least 3 characters']
    },
});

const Author = model('author', AuthorSchema);

module.exports = { AuthorSchema, Author };
