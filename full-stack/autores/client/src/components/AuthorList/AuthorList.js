import React, { useEffect, useState } from 'react';
import './styles.css'
import getAuthors from '../../actions/getAuthors';

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        getAuthors().then(({ data }) => setAuthors(data));
    }, []);

    const List = () =>
        authors.map(({ _id, name }) => (
            <tr key={_id}>
                <td>{name}</td>
                <td>
                    <button>Edit</button>
                    <button>Delte</button>
                </td>
            </tr>
        ));

    return (
        <table className="author-list">
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                <List />
            </tbody>
        </table>
    );
};

export default AuthorList;
