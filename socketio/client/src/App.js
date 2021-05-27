import React from 'react';
import './reset.css'
import './App.css';
import { SocketProvider } from './providers/SocketProvider';
import { UserProvider } from './providers/UserProvider';
import Home from './view/Home';

const App = () => {
    return (
        <UserProvider>
            <SocketProvider>
                <h1>MERN Chat</h1>
                <main>
                    <Home />
                </main>
            </SocketProvider>
        </UserProvider>
    );
};

export default App;
