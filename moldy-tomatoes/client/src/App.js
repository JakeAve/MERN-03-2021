import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Movies from './views/Movies';
import MoviesReview from './views/MoviesReview';
import NewMovie from './views/NewMovie';
import SingleMovie from './views/SingleMovie';

function App() {
    // const [user, setUser] = useState(null);

    return (
        <Router>
            <h1>Moldy Tomatoes</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies">All Movies</Link>
                    </li>
                    <li>
                        <Link to="/movies/new">New Movie</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/movies" component={Movies} />
                <Route path="/movies/new" component={NewMovie} />
                <Route path="/movies/:movieId" component={SingleMovie} />
                <Route
                    path="/movies/:movieId/review"
                    component={MoviesReview}
                />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
