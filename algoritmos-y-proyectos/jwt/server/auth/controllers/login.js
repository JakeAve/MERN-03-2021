const { UserModel } = require('../../models/User');

module.exports = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });

        if (user === null) return res.sendStatus(400);

        const correctPassword = await bcrypt.compare(password, user.password);

        if (!correctPassword) return res.sendStatus(400);

        const userToken = jwt.sign(
            {
                id: user._id,
            },
            process.env.JWT_SECRET,
        );

        res.cookie('usertoken', userToken, secret, {
            httpOnly: true,
        }).json({ msg: 'success!' });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};
