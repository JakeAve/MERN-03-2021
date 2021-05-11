const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    price: { type: Number, require: true },
    description: { type: String, require: true },
});

const Product = model('product', ProductSchema);

module.exports = {
    schema: ProductSchema,
    model: Product,
};
