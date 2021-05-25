const { UserModel } = require('../models/User');

const newUser = async (req, res) => {
    try {
        const { firstName } = req.body;
        const user = UserModel({ firstName });
        await user.save();
        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

module.exports = { newUser };
