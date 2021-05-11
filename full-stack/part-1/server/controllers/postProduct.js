const { model: ProductModel } = require('../models/Product');

const controller = async (req, res) => {
    try {
        console.log(req.body);
        const { title, price, description } = req.body;

        const product = new ProductModel({ title, price, description });
        await product.save();

        res.json(product);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

module.exports = controller;
