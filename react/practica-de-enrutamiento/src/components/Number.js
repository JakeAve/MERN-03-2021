import { useParams } from '@reach/router';
import React from 'react';

const Number = () => {
    const { number } = useParams();

    return <div>The number is {number}</div>;
};

export default Number;
