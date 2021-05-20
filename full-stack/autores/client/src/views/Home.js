import React from 'react';
import AuthorList from '../components/AuthorList/AuthorList';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import { useUser } from '../contexts/userContext';

const Home = () => {
    const { user } = useUser();

    const content = user ? (
        <AuthorList />
    ) : (
        <div className="register-login">
            <Register /> <Login />
        </div>
    );

    return (
        <div>
            Home
            {content}
        </div>
    );
};

export default Home;
