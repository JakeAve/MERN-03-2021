const { sign, verify } = require('jsonwebtoken');

const jsonSecret = process.env.JWT_SECRET;

const createToken = (user) => {
    const accessToken = sign({ email: user.email, id: user._id }, jsonSecret, {
        expiresIn: '1hr',
    });

    return accessToken;
};

const validateToken = (req, res, next) => {
    const accessToken = req.cookies['access-token'];

    if (!accessToken)
        return res.status(401).json({ message: 'User not Authenticated!' });

    try {
        const validToken = verify(accessToken, jsonSecret);
        if (validToken) {
            req.authenticated = true;

            return next();
        }
    } catch (err) {
        return res.status(400).json({ message: err });
    }
};

module.exports = { createToken, validateToken };
