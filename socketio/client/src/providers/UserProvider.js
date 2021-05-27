import { createContext, useContext, useState } from 'react';
const STORAGE_KEY = 'usuario';

const storedUser = localStorage.getItem(STORAGE_KEY);
const UserContext = createContext(storedUser || null);

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setStateUser] = useState(useUser());
  const setUser = (arg) => {
    if (arg) {
      localStorage.setItem(
        STORAGE_KEY,
        typeof arg === 'function' ? arg(user) : arg,
      );
    } else localStorage.removeItem(STORAGE_KEY);

    return setStateUser(arg);
  };
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}