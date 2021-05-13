const { Router } = require('express');
const router = Router();

const {
    postProduct,
    getAllProducts,
    getProduct,
    deleteProduct
} = require('../controllers/product');

router.post('/product', postProduct);
router.get('/product/:id', getProduct);
router.get('/product', getAllProducts);
router.delete('/product/:id', deleteProduct);

module.exports = router;
