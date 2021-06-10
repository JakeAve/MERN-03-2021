const { createTokens, refreshTokenCookieName } = require('../../jwt');
const { UserModel } = require('../../models/User');
const bcrypt = require('bcrypt');
const refresh = require('./refresh');

const fourHundred = (res) =>
    res.status(400).json({ message: 'Invalid Credentials' });

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });

        if (user === null) return fourHundred(res);

        const correctPassword = await bcrypt.compare(password, user.password);

        if (!correctPassword) return fourHundred(res);

        const { accessToken, refreshToken } = createTokens(user, req, res);

        res.cookie(refreshTokenCookieName, refreshToken, {
            httpOnly: true,
        });

        res.json({ accessToken });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

module.exports = login;
