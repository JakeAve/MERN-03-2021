import React, { useEffect, useState } from 'react';
import fetchGrupos from '../actions/fetchGrupos';

const Menu = () => {
    const [grupos, setGrupos] = useState([]);

    useEffect(() => {
        fetchGrupos().then((arr) => setGrupos(arr));
    }, []);

    const options = grupos.map(([nombre, link], key) => (
        <option key={key} value={link}>
            {nombre.toUpperCase()}
        </option>
    ));
    return (
        <>
            <label htmlFor="select-de-grupo">Search For:</label>
            <select id="select-de-grupo" name="grupo">
                {options}
            </select>
        </>
    );
};

export default Menu;
