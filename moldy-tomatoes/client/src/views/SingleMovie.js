import React from 'react';
import ReviewList from '../components/ReviewList';

const SingleMovie = (props) => {
    console.log({props})
    const movieId = props.match.params.movieId;
    return (
        <div>
            <ReviewList movieId={movieId} />
        </div>
    );
};

export default SingleMovie;
