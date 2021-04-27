import { createContext, useContext, useState } from 'react';

const user = {
    firstName: 'Juan',
    lastName: 'Molina',
    id: '123456789',
};

const userContext = createContext(user);

export const UserProvider = ({ children }) => {
    const sessionId = '123ABC';
    const [usuario, cambiarUsuario] = useState(user.firstName);
    return (
        <userContext.Provider
            value={{ ...user, sessionId, cambiarUsuario, firstName: usuario }}
        >
            {children}
        </userContext.Provider>
    );
};

export const useUser = () => useContext(userContext);
