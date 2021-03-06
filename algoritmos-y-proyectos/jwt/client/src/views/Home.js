import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../contexts/user';

const Home = () => {
    const { user, accessToken } = useUser();
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/info', {
            headers: { authorization: `Bearer ${accessToken}` },
        })
            .then((res) => res.json())
            .then(({ info }) =>
                setMessage(`The secret information is: ${info}`),
            );
    }, [accessToken]);

    if (user)
        return (
            <div>
                <h1>Welcome Home, {user.firstName}</h1>
                <div>{message}</div>
            </div>
        );
    else return <Redirect to="/login" />;
};

export default Home;
