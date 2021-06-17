const { sign, verify, decode } = require('jsonwebtoken');
const { UserModel } = require('./models/User');
const refreshTokenCookieName = 'refresh-token';

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

// Refresh token will become invalid once user changes password
const getRefreshTokenSecret = (user) => refreshTokenSecret + user.password;

const createTokens = (user) => {
    const refreshToken = createRefreshToken(user);
    const accessToken = createAccessToken(user);
    return { accessToken, refreshToken };
};

const refreshTokens = async (req, res) => {
    try {
        const refreshToken = req.cookies[refreshTokenCookieName];

        console.log({ refreshToken });

        const { id } = decode(refreshToken);

        const user = await UserModel.findById(id).exec();

        const validRefreshToken = verify(
            refreshToken,
            getRefreshTokenSecret(user),
        );

        if (!validRefreshToken) throw new Error('Invalid credentials');

        const { accessToken, refreshToken: newRefreshToken } =
            createTokens(user);

        res.cookie(refreshTokenCookieName, newRefreshToken, {
            httpOnly: true,
        });
        return accessToken;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

const createAccessToken = (user) => {
    try {
        const accessToken = sign(
            { email: user.email, id: user._id },
            accessTokenSecret,
            {
                expiresIn: '15m',
            },
        );

        return accessToken;
    } catch (err) {
        throw err;
    }
};

const createRefreshToken = (user) => {
    const refreshToken = sign(
        { email: user.email, id: user.id },
        getRefreshTokenSecret(user),
        {
            expiresIn: '7d',
        },
    );
    return refreshToken;
};

const validateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token)
        return res.status(401).json({ message: 'User not Authenticated!' });

    try {
        const validToken = verify(token, accessTokenSecret);
        if (validToken) {
            const user = await UserModel.findOne(validateToken.id).exec();

            // const { accessToken } = createTokens(user, req, res);
            req.authenticated = true;
            req.user = user;
            req.accessToken = await refreshTokens(req, res, user);

            return next();
        }
    } catch (err) {
        console.error(err);
        return res.status(403).json({ message: 'Forbidden' });
    }
};

module.exports = {
    createTokens,
    createToken: createAccessToken,
    createRefreshToken,
    validateToken,
    refreshTokenCookieName,
    refreshTokens,
};
