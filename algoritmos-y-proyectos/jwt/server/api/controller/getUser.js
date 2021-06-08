const { UserModel } = require('../../models/User');

const getUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await UserModel.findById(id).exec();
        const { firstName, _id, lastName, email } = user;

        res.json({ firstName, lastName, _id, email });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = getUser;
