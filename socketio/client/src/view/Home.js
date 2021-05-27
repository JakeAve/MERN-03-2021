import React from 'react';
import Chat from '../components/Chat';
import Login from '../components/Login';
import { useUser } from '../providers/UserProvider';

const Home = () => {
    const { user } = useUser();

    if (!user) return <Login />;
    else return <Chat />;
};

export default Home;
