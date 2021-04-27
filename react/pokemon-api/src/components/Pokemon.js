import React, { useState } from 'react';
import fetchPokemon from '../actions/fetchPokemon';

const Pokemon = () => {
    const [items, setItems] = useState([]);

    const onClick = async () => {
        try {
            const arr = await fetchPokemon();
            setItems(arr);
        } catch (err) {
            alert(err);
        }
        // fetchPokemon()
        //     .then((arr) => setItems(arr))
        //     .catch((err) => alert(err));
    };

    const listItems = items.map((name, key) => <li key={key}>{name}</li>);

    return (
        <section className="pokemon-section">
            <h1>Pokemon API</h1>
            <button onClick={onClick}>Fetch Pokemon</button>
            <ul>{listItems}</ul>
        </section>
    );
};

export default Pokemon;
