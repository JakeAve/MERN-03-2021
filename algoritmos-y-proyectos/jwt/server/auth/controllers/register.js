const { UserModel } = require('../../models/User');
const { createToken } = require('../../jwt');

module.exports = async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword } =
            req.body;

        const exists = await UserModel.findOne({ email }).exec();

        if (exists)
            return res.status(409).json({ message: 'User already exists' });

        const user = await UserModel.create({
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        });

        const accessToken = createToken(user);

        console.log({ accessToken });

        res.cookie('access-token', accessToken, process.env.JWT_SECRET, {
            httpOnly: true,
        });

        res.status(201).json({ email });
    } catch (err) {
        console.error(err);
        console.log(req.body);

        if (err.errors) res.status(400).json(err);
        // mongoose error
        else res.sendStatus(500);
    }
};
