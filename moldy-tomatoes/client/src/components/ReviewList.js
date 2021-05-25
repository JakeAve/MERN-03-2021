import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import getReviews from '../actions/getReviews';

const ReviewList = (props) => {
    const { movieId } = props;
    const [list, setList] = useState([]);

    useEffect(() => {
        getReviews(movieId)
            .then(({ success, data }) => {
                if (success) setList(data);
                else window.alert('An error occured');
            })
            .catch(() => window.alert('An error occured'));
    }, [movieId]);

    const listContent = list.map(({ createdBy, _id, rating, content }) => (
        <tr key={_id}>
            <td>{createdBy}</td>
            <td>{rating}</td>
            <td>{content}</td>
        </tr>
    ));

    return (
        <table>
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

export default ReviewList;
