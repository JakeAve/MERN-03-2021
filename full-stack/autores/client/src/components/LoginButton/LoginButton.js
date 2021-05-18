import React from 'react';
import { useUser } from '../../contexts/userContext';

const LoginButton = () => {
    const { user, setUser } = useUser();
    return <button>{user ? 'Sign out as ' + user.firstName : 'Login'}</button>;
};

export default LoginButton;
