const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dob: Date,
    correo: String,
    luckyNumber: Number
})

const User = mongoose.model('user', UserSchema)

module.exports = User