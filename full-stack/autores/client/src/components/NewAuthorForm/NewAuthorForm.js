import React, { useRef, useState } from 'react';
import './styles.css';
import newAuthor from '../../actions/newAuthor';
import { useUser } from '../../contexts/userContext';

const showFieldError = (form, field, message) => {
    form.querySelector(`[data-${field}-error]`).innerHTML = message;
};

const NewAuthorForm = () => {
    const [nameValue, setNameValue] = useState('');
    const successRef = useRef(null);
    const { user } = useUser();

    const onSubmit = async (e) => {
        e.preventDefault();
        const form = e.target.closest('form');
        if (nameValue.length <= 3) {
            return showFieldError(
                form,
                'name',
                `Author name needs to be at least 3 characters`,
            );
        }
        const { success, data } = await newAuthor({
            name: nameValue,
            id: user._id,
        });
        if (!success && data.length) {
            // Mongoose error
            data.forEach(({ field, message }) => {
                showFieldError(form, field, message);
            });
        } else if (!success) {
            // Other error
            window.alert(data.errores.error);
        } else {
            // Exito
            form.remove();
            successRef.current.classList.add('show');
        }
    };

    return (
        <>
            <h1>New Author Made by {user.firstName}</h1>
            <form className="new-form" onSubmit={onSubmit}>
                <label htmlFor="name-1">Author Name</label>
                <input
                    name="name"
                    id="name-1"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                />
                <span className="error" data-name-error></span>
                <button type="button">Cancel</button>
                <button type="submit">Submit</button>
            </form>
            <div className="success-msg" ref={successRef}>
                Success!
            </div>
        </>
    );
};

export default NewAuthorForm;
