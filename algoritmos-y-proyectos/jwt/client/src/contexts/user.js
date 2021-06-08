const { useContext, createContext } = require('react');

const UserContext = createContext(null);

export const UserProvider = (props) => {
    const { children } = props;
    return (
        <UserContext.Provider value={{ user: null }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
