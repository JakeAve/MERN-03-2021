const { createToken } = require('../../jwt');
const { UserModel } = require('../../models/User');
const bcrypt = require('bcrypt');

const fourHundred = (res) =>
    res.status(400).json({ message: 'Invalid Credentials' });

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });

        if (user === null) return fourHundred(res);

        const correctPassword = await bcrypt.compare(password, user.password);

        if (!correctPassword) return fourHundred(res);

        const accessToken = createToken(user);

        res.cookie('access-token', accessToken, process.env.JWT_SECRET, {
            httpOnly: true,
        }).json({ _id: user._id });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

module.exports = login;
