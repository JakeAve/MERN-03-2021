const express = require('express')
const Image = require('../../models/Image')
const router = express.Router()

router.get('/', (req, res) => {
    const image = new Image();

    // const jsonImage = JSON.stringify(image);
    // res.setHeader('content-type', 'application/json');
    // res.send(jsonImage).status(200)
    res.json(image);
})

module.exports = router