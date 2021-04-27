import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Pokemon from './components/Pokemon';
import PokemonAxios from './components/PokemonAxios';

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/axios">
                        <PokemonAxios />
                    </Route>
                    <Route exact path="/">
                        <Pokemon />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
