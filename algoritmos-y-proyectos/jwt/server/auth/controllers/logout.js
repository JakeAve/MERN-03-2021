const { refreshTokenCookieName } = require('../../jwt');

const logout = (req, res) => {
    res.clearCookie(refreshTokenCookieName);
    res.json({ message: 'OK' });
};

module.exports = logout;
