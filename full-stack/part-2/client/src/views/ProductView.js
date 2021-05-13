import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getProduct from '../actions/getProduct';
import Product from '../components/Product';

const ProductView = (props) => {
    const productId = props.match.params.productId;
    const [productProps, setProductProps] = useState(null);

    useEffect(() => {
        const _getProduct = async () => {
            const { success, data } = await getProduct(productId);
            if (success) setProductProps(data);
        };

        _getProduct();
    }, [productId]);

    return (
        <section className="product-section">
            {productProps ? <Product {...productProps} /> : <h1>Loading...</h1>}
            <div>
                <Link to="/">Return Home</Link>
            </div>
        </section>
    );
};

export default ProductView;
