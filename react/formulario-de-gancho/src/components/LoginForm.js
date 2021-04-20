import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('rick');
    const [password, setPassword] = useState('contraseña');

    // const [formEntries, setFormEntries] = useState({username: '', password: ''});

    // const onChange = (e) => {
    //     const input = e.target;
    //     setFormEntries({...formEntries, [input.name]: input.value });
    // }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({ username, password });
    };

    // const {username, password} = formEntries;

    return (
        <div className="login-form">
            <form onSubmit={onSubmit} /*onChange={onChange}*/>
                <input
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    name="username"
                    value={username}
                />
                <input
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    name="password"
                    type="password"
                    value={password}
                />
                <input type="submit" />
            </form>
            <div>
                Username: {username}
                <br />
                Password: {password}
            </div>
        </div>
    );
};

export default LoginForm;
