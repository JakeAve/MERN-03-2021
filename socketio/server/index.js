require('dotenv').config();
const express = require('express');
const socketio = require('socket.io');

const app = express();

const port = process.env.PORT || 5000;

const server = app.listen(port, () =>
    console.log(`1: Servidor está en ${port}`),
);

const io = socketio(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
    console.log('el servidor te escucha');
    socket.emit('log', 'Este cliente está conectado al servidor');

    socket.on('enviar-mensaje', (mensaje, usuario, tiempo) => {
        console.log({ mensaje, usuario, tiempo });
        socket.broadcast.emit('recibir-mensaje', { mensaje, usuario, tiempo });
    });
});
