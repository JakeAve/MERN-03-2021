import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Nav from './components/Nav';
import Alpha from './views/Alpha';
import Home from './views/Home';
import Beta from './views/Beta';

function App() {
    return (
        <>
            <Header />
            <Nav />
            <Router>
                <Home path="/" />
                <Alpha path="alpha" />
                <Alpha path="alpha/:numeroDeAlpha" />
                <Beta path="beta" />
            </Router>
        </>
    );
}

export default App;
