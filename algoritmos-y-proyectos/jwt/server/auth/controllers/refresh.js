const { refreshTokens } = require('../../jwt');

const refresh = async (req, res) => {
    const accessToken = await refreshTokens(req, res);
    res.json({ accessToken });
};

module.exports = refresh;
