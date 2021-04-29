import React from 'react';
// import { Router } from '@reach/router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';

function App() {
    return (
        <>
            <Router>
                <div>Un div arriba</div>
                <Switch>
                    <Route path="/:word/:textColor/:backgroundColor">
                        <Word />
                    </Route>
                    <Route exact path="/:word">
                        <Word />
                    </Route>
                    <Route exact path="/:number">
                        <Number />
                    </Route>
                    <Route  path="/" component={Home} />
                </Switch>
            </Router>
            {/* <Router>
                <Home default path="/" />
                <Home exact path="/home" />
                <Word path="/:word"  />
                <Word path="/:word/:textColor/:backgroundColor" />
                <Number path="/:number" />
            </Router> */}
        </>
    );
}

export default App;
