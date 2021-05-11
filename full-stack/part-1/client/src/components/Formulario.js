import React, { useState } from 'react';
import postNewForm from '../actions/postNewForm';

const Formulario = () => {
    const [hayError, setHayError] = useState(false);
    const [didAttemptSubmit, setDidAttemptSubmit] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.target.closest('form');
        const formData = new FormData(form);
        const data = {};
        for (const [key, value] of formData.entries()) data[key] = value;
        const { success, data: postData } = await postNewForm(data);
        if (success) {
            form.querySelectorAll('input').forEach(
                (input) => (input.value = ''),
            );
            setHayError(false);
            setDidAttemptSubmit(true);
        } else {
            setHayError(true);
            setDidAttemptSubmit(true);
            console.log({ postData });
        }
    };

    const message =
        didAttemptSubmit && hayError ? (
            <div>Oops, there was an error</div>
        ) : didAttemptSubmit ? (
            <div>Success!</div>
        ) : (
            ''
        );

    return (
        <>
            {message}
            <form className="new-product" onSubmit={onSubmit}>
                <label>
                    Title
                    <br />
                    <input name="title" />
                </label>
                <label>
                    Price
                    <br />
                    <input name="price" type="number" />
                </label>
                <label>
                    Description
                    <br />
                    <input name="description" />
                </label>
                <button>Create</button>
            </form>
        </>
    );
};

export default Formulario;
