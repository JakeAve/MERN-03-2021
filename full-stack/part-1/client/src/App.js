import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Formulario from './components/Formulario';
import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Formulario} />
            </Switch>
        </Router>
    );
}

export default App;
