import getUserInfo from '../actions/getUserInfo';

const { useContext, createContext, useState, useEffect } = require('react');

const userIdFromLocalStorage = localStorage.getItem('userId');

const UserContext = createContext(null);

export const UserProvider = (props) => {
    const { children } = props;
    const [user, setUser] = useState(
        userIdFromLocalStorage ? { _id: userIdFromLocalStorage } : null,
    );

    const _getUserInfo = async () => {
        const { success, data } = await getUserInfo(userIdFromLocalStorage);
        if (success) setUser(data);
    };

    if (!user && userIdFromLocalStorage) {
        _getUserInfo();
    }

    useEffect(() => {
        if (user) localStorage.setItem('userId', user._id);
        else localStorage.removeItem('userId');
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
