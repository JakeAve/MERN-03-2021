import React from 'react';
import deleteProduct from '../actions/deleteProduct';

const DeleteButton = (props) => {
    const { id, title, onDelete = () => {}, onError = () => {} } = props;
    const onClick = async () => {
        const confirmed = window.confirm(
            `Are you sure you want to delete ${title}?`,
        );
        if (!confirmed) return;
        const { success } = await deleteProduct(id);
        if (success) onDelete();
        else onError();
    };

    return (
        <button className="delete-btn" onClick={onClick}>
            Delete
        </button>
    );
};

export default DeleteButton;
