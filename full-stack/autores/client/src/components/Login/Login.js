import React from 'react';
import getUser from '../../actions/getUser';
import login from '../../actions/login';
import { useUser } from '../../contexts/userContext';
import './styles.css';

const Login = () => {
    const { setUser } = useUser();

    const onSubmit = async (e) => {
        e.preventDefault();
        const form = e.target.closest('form');
        const formData = new FormData(form);
        const payload = {};
        for (const [key, value] of formData.entries()) payload[key] = value;
        const { success, data } = await login(payload);
        if (success) {
            const { success: success2, data: loggedInUser } = await getUser(
                data._id,
            );
            if (success2) {
                setUser(loggedInUser);
                window.alert('Success');
            } else window.alert('Error!');
        } else window.alert(data.errors.error.message);
    };

    return (
        <form onSubmit={onSubmit} className="login-form">
            <label>Email</label>
            <input name="email" />
            <label>Password</label>
            <input name="password" />
            <button>Login</button>
        </form>
    );
};

export default Login;
