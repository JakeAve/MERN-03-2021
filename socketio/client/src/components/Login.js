import React from 'react';
import { useUser } from '../providers/UserProvider';

const Login = () => {
    const { setUser } = useUser();

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target.closest('form'));
        const usuario = formData.get('usuario');
        setUser(usuario);
    };
    return (
        <form onSubmit={onSubmit} className="login-form">
            <label htmlFor="usuario">Entre su nombre</label>
            <input id="usario" name="usuario" />
            <button>Iniciar Chat</button>
        </form>
    );
};

export default Login;
