import { createContext, useContext, useState } from 'react';

const userContext = createContext(null);

export const UserProvider = (props) => {
    const {children} = props;
    const [user, setUser] = useState(null)

    return <userContext.Provider value={{user, setUser}}>
        {children}
    </userContext.Provider>;
};

export const useUser = () => useContext(userContext);
