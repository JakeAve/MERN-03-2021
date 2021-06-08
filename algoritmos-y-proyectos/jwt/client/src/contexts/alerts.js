import { useContext, createContext, useState } from 'react';
import Alert from '@material-ui/lab/Alert';

const AlertContext = createContext(null);

export const AlertProvider = (props) => {
    const { children } = props;
    const [alert, setAlert] = useState('');
    const _setAlert = (severity, message, time) => {
        setAlert(<Alert severity={severity}>{message}</Alert>);
        if (time) setTimeout(() => setAlert(''), time);
    };

    return (
        <AlertContext.Provider value={_setAlert}>
            {alert}
            {children}
        </AlertContext.Provider>
    );
};

export const useAlert = () => useContext(AlertContext);
