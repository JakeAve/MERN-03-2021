const { model: ProductModel } = require('../models/Product');

const postProduct = async (req, res) => {
    try {
        console.log(req.body);
        const { title, price, description } = req.body;

        const product = new ProductModel({ title, price, description });
        await product.save();

        res.status(201).json(product);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({}).exec();
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.findById(id).exec();
        if (!product) return res.sendStatus(404);
        res.json(product);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.deleteOne({ _id: id }).exec();
        if (!product.deletedCount) return res.sendStatus(404);
        res.sendStatus(202);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

module.exports = { postProduct, getAllProducts, getProduct, deleteProduct };
