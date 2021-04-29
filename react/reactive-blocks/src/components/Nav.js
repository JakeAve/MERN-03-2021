import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
    const id = '1000';
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to={`/alpha/${id}`}>Alpha</Link>
            <Link to="/beta">Beta</Link>
        </nav>
    );
};

export default Nav;
