import React from 'react';
import createMovie from '../actions/createMovie';

const NewMovieForm = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const form = e.target.closest('form');
        const formData = new FormData(form);
        const payload = {};
        for (const [key, value] of formData.entries()) payload[key] = value;
        payload.rating = Number(payload.rating);
        await createMovie(payload);
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="label-input">
                <label htmlFor="title">Title</label>
                <input id="title" name="title" />
            </div>
            <div className="label-input">
                <label htmlFor="createdBy">Reviewer</label>
                <input id="createdBy" name="createdBy" />
            </div>
            <div className="label-input">
                <label htmlFor="rating">Rating</label>
                <select id="rating" name="rating">
                    <option value="1">1 Star</option>
                    <option value="2">2 Star</option>
                    <option value="3">3 Star</option>
                    <option value="4">4 Star</option>
                    <option value="5">5 Star</option>
                </select>
            </div>
            <div className="label-input">
                <label htmlFor="content">Content</label>
                <textarea id="content" name="content"></textarea>
            </div>
            <div className="submit-cancel-btns">
                <button role="submit">Submit</button>
                <button role="button">Cancel</button>
            </div>
        </form>
    );
};

export default NewMovieForm;
