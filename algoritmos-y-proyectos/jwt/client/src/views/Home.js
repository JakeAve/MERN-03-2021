import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../contexts/user';

const Home = () => {
    const { user } = useUser();

    if (user)
        return (
            <div>
                <h1>Welcome Home, {user.firstName}</h1>
            </div>
        );
    else return <Redirect to="/login" />;
};

export default Home;
