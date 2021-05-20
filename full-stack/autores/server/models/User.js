const mongoose = require('mongoose');
const { AuthorSchema } = require('./Author');

const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'First name is required'],
        },
        lastName: {
            type: String,
            required: [true, 'Last name is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [8, 'Password must be 8 characters or longer'],
        },
        authors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }],
    },
    { timestamps: true },
);

const UserModel = mongoose.model('User', UserSchema);

module.exports = { UserSchema, UserModel };
