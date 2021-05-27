import React, { useEffect, useRef, useState } from 'react';
import { useSocket } from '../providers/SocketProvider';
import { useUser } from '../providers/UserProvider';
import Message from './Message';

const Chat = () => {
    const socket = useSocket();
    const { user } = useUser();
    const [mensajes, setMensajes] = useState([]);
    const textareaRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const nuevoMensaje = textareaRef.current.value;
        const mensaje = nuevoMensaje;
        const usuario = user;
        const tiempo = new Date().toUTCString();

        socket.emit('enviar-mensaje', mensaje, usuario, tiempo);
        textareaRef.current.value = '';

        setMensajes((msgs) => [...msgs, { mensaje, usuario, tiempo }]);
    };

    useEffect(() => {
        if (!socket) return;

        socket.on('recibir-mensaje', (mensajeDelServidor) => {
            console.log({ mensajeDeServidor: mensajeDelServidor });
            setMensajes((msgs) => [...msgs, mensajeDelServidor]);
        });

        return () => socket.off('recibir-mensaje');
    }, [socket]);

    return (
        <div className="chat">
            <div className="messages">
                {mensajes.map((m, index) => (
                    <Message key={index} {...m} />
                ))}
            </div>
            <form onSubmit={onSubmit} className="new-message">
                <label htmlFor="mensaje">Su mensaje:</label>
                <textarea
                    id="mensaje"
                    name="nuevo-mensaje"
                    ref={textareaRef}
                ></textarea>
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default Chat;
