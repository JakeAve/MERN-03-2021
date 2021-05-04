const express = require('express');
const Empresa = require('../../models/Empresa');
const router = express.Router();

router.post('/new', (req, res) => {
    const user = new Empresa();

    res.json(user);
});

module.exports = router;
