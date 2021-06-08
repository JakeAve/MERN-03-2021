const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
            validate: {
                validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: 'Please enter a valid email',
            },
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [8, 'Password must be 8 characters or longer'],
        },
    },
    { timestamps: true },
);

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set((value) => (this._confirmPassword = value));

UserSchema.pre('validate', function (next) {
    if (this.password !== this['confirmPassword']) {
        this.invalidate(
            'confirmPassword',
            'Password must match confirm password',
        );
    }
    next();
});

UserSchema.pre('save', async (next) => {
    const hash = bcrypt.hashSync(this.password, 10);
    console.log({ hash });
    next();
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = { UserSchema, UserModel };
