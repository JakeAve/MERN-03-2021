import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './views/Home';
import ProductView from './views/ProductView';

function App() {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route path="/:productId" component={ProductView} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
