import { Button } from '@material-ui/core';
import React from 'react';
import logoutUser from '../actions/logoutUser';
import { useUser } from '../contexts/user';

const Logout = () => {
    const { setUser } = useUser();
    const onClick = async () => {
        await logoutUser();
        setUser(null);
    };
    return (
        <Button onClick={onClick} color="primary">
            Logout
        </Button>
    );
};

export default Logout;
