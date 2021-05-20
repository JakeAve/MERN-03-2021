import React from 'react';
import registerUser from '../../actions/registerUser';
import './styles.css';

const Register = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const form = e.target.closest('form');
        const formData = new FormData(form);
        const payload = {};
        for (const [key, value] of formData.entries()) payload[key] = value;

        const passwordsMatch = payload.password === payload.confirmPassword;

        if (passwordsMatch) {
            const { success } = await registerUser(payload);
            if (success) alert('Success');
            else alert('Error');
        } else {
            alert('Passwords do not match');
        }
    };
    return (
        <form onSubmit={onSubmit} className="register">
            <label>First Name </label>
            <input name="firstName" />
            <label>Last Name </label>
            <input name="lastName" />
            <label>Email </label>
            <input name="email" />
            <label>Password </label>
            <input name="password" />
            <label>Confirm Password </label>
            <input name="confirmPassword" />
            <button>Register</button>
        </form>
    );
};

export default Register;
