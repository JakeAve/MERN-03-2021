const { UserModel } = require('../../models/User');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword } =
            req.body;

        const exists = await UserModel.findOne({ email }).exec();

        if (exists)
            return res.status(409).json({ message: 'User already exists' });

        // const user = new UserModel({
        //     firstName,
        //     lastName,
        //     email,
        //     password,
        //     confirmPassword,
        // });

        await UserModel.create({
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        });

        // await user.save();

        res.status(201).json({ email });
    } catch (err) {
        console.error(err);
        console.log(req.body);

        if (err.errors) res.status(400).json(err);
        // mongoose error
        else res.sendStatus(500);
    }
};
