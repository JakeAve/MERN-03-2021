const fetchPokemon = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err) {
        throw err;
    }
};

// por si acaso si el API no nos deja cambiar los "paramaters"

const fetchExtremo = async () => {
    const requests = [];
    let next = 'https://pokeapi.co/api/v2/pokemon';
    while (next) {
        const response = await fetchPokemon(next);
        next = response.next;
        requests.push(response);
    }
    const results = requests.map(({results}) => results).flat().map(({name}) => name);
    return results;
};

export default fetchExtremo;
