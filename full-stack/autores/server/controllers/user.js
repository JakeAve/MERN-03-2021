const { UserModel } = require('../models/User');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password: _password } = req.body;

        const exists = await UserModel.findOne({ email }).exec();
        console.log(exists);
        if (exists)
            return res.status(400).json({
                errores: { error: { message: 'User Already Exists' } },
            });

        const password = await bcrypt.hash(_password, 10);
        const user = UserModel({ firstName, lastName, email, password });
        await user.save();
        res.json({ email });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

const login = async (req, res) => {
    try {
        const { email, password: _password } = req.body;

        const user = await UserModel.findOne({ email }).exec();
        console.log(user);
        if (!user)
            return res.status(400).json({
                errores: { error: { message: 'Could not login' } },
            });

        const { password: savedPassword } = user;
        
        const match = await bcrypt.compare(_password, savedPassword);

        if (!match)
            return res.status(400).json({
                errores: { error: { message: 'Could not login' } },
            });
        else return res.json({ email: user.email });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

const getUser = async (id) => {
    try {
        const res = await fetch(`http://localhost:5000/api/user/${id}`);
        if (!res.ok) throw new Error(res.text);
        const json = await res.json();
        return { success: true, data: json };
    } catch (e) {
        console.error(e);
        return { success: false, data: e.message };
    }
};

module.exports = { createUser, getUser, login };
