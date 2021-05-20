const { UserModel } = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password: _password } = req.body;

        const exists = await UserModel.findOne({ email }).exec();
        console.log(exists);
        if (exists)
            return res.status(400).json({
                errors: { error: { message: 'User Already Exists' } },
            });

        const password = await bcrypt.hash(_password, 10);
        const user = UserModel({ firstName, lastName, email, password, authors: [] });
        await user.save();

        const jwtToken = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

        return res
            .cookie('usertoken', jwtToken, process.env.JWT_SECRET, {
                httpOnly: true,
            })
            .json({ email: user.email, _id: user._id});
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
                errors: { error: { message: 'Could not login' } },
            });

        const { password: savedPassword, _id } = user;

        const match = await bcrypt.compare(_password, savedPassword);

        if (!match)
            return res.status(400).json({
                errors: { error: { message: 'Could not login' } },
            });
        const jwtToken = jwt.sign({ _id }, process.env.JWT_SECRET);

        return res
            .cookie('usertoken', jwtToken, process.env.JWT_SECRET, {
                httpOnly: true,
            })
            .json({ email: user.email, _id: _id });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

const logout = async (req, res) => {
    try {
        res.clearCookie('usertoken');
        res.json({success: true});
    } catch (e) {
        console.error(e);
        return { success: false, data: e.message };
    }
};

const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findById(id).exec();
        res.json(user);
    } catch (e) {
        console.error(e);
        return { success: false, data: e.message };
    }
};

module.exports = { createUser, getUser, login, logout };
