import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import New from './views/New';
import Edit from './views/Edit';
import { UserProvider } from './contexts/userContext';
import LoginButton from './components/LoginButton/LoginButton';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <LoginButton />
                <Switch>
                    <Route path="/new" component={New} />
                    <Route path="/edit" component={Edit} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </UserProvider>
    );
};

export default App;
