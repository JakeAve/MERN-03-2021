import React from 'react';
import { useUser } from '../../contexts/userContext';
import { useHistory } from 'react-router-dom';
import logoutAction from '../../actions/logout';

const LoginButton = () => {
    const { user, setUser } = useUser();

    const logOut = async () => {
        const { success } = await logoutAction();
        if (success) setUser(null);
        else window.alert('Error, could not log out')
    };

    const history = useHistory();

    const login = () => {
        history.push('/');
    };

    if (user)
        return <button onClick={logOut}>Sign out as {user.firstName}</button>;
    else return <button onClick={login}>Login</button>;
};

export default LoginButton;
