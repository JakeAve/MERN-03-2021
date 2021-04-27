const fetchPokemon = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data.next;
    } catch (err) {
        throw err;
    }
};

const fetchExtremo = async () => {
    const requests = [fetchPokemon('https://pokeapi.co/api/v2/pokemon')];
};

export default fetchExtremo;
