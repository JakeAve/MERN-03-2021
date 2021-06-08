const logout = (req, res) => {
    res.clearCookie('access-token');
    res.json({ message: 'OK' });
};

module.exports = logout;
