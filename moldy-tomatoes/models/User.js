const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: { type: String, required: [true, 'First name is required'] },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = { UserSchema, UserModel };
