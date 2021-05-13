import React, { useState } from 'react';
import { Redirect } from 'react-router';
import DeleteButton from './DeleteButton';

const Product = (props) => {
    const { title = '', price = '', description = '', _id } = props;
    const [willRedirect, setWillRedirect] = useState(false);

    return (
        <>
            <h1>{title}</h1>
            <div>Price: ${price}</div>
            <div>Description {description}</div>
            <DeleteButton id={_id} title={title} onDelete={() => setWillRedirect(true)} />
            {willRedirect ? <Redirect to="/" /> : ''}
        </>
    );
};

export default Product;
