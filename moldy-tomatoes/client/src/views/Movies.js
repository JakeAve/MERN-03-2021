import React from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../components/MovieList';

const Movies = () => {
    return (
        <div>
            <Link to="/movies/new">Create a new movie</Link>
            <MovieList />
        </div>
    );
};

export default Movies;
