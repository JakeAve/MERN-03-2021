const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: String,
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = { UserSchema, UserModel };
