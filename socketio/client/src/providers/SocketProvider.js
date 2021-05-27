import { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext(io(':5000'));

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
    const [socket] = useState(useSocket());

    useEffect(() => {
        socket.on('log', (d) =>
            console.log(
                `%cLog de Servidor: ${d}`,
                'color: orange; font-size: 1.1rem;',
            ),
        );
        socket.on('disconnect', () => socket.open());

        return () => {
            socket.disconnect(true);
        };
    });

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};
