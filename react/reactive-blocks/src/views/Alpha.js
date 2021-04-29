import { useParams } from '@reach/router';
import React from 'react';

const Alpha = () => {
    const { numeroDeAlpha } = useParams();
    return (
        <main className="alpha">
            <div className="alpha-box">{numeroDeAlpha}</div>
            <div className="alpha-box" />
        </main>
    );
};

export default Alpha;
