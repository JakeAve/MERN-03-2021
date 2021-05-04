const express = require('express');
const Empresa = require('../../models/Empresa');
const Usuario = require('../../models/Usuario');
const router = express.Router();

router.post('/', (req, res) => {
    const empresa = new Empresa();
    const usuario = new Usuario();
    res.json({user: usuario, company: empresa});
});

module.exports = router;
