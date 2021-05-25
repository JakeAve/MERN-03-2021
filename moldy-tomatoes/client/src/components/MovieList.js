import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import getMovies from '../actions/getMovies';

const MovieList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        getMovies()
            .then(({ success, data }) => {
                if (success) setList(data);
                else window.alert('An error occured');
            })
            .catch(() => window.alert('An error occured'));
    }, []);

    const listContent = list.map(({ title, _id, averageRating }) => (
        <tr key={_id}>
            <td>{title}</td>
            <td>{averageRating}</td>
            <td>
                <Link className="action-btn read" to={`/movies/${_id}`}>Read Review</Link>
                <Link  className="action-btn write" to={`/movies/${_id}/review`}>Write Review</Link>
            </td>
        </tr>
    ));

    return (
        <table className="table-list">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Avg Rating</th>
                    <th>Actions </th>
                </tr>
            </thead>
            <tbody>{listContent}</tbody>
        </table>
    );
};

export default MovieList;
