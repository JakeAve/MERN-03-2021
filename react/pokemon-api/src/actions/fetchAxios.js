import axios from 'axios';

const fetchAxios = () =>
    axios
        .get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807')
        .then((response) => {
            const results = response.data.results;
            const arr = results.map(({ name }) => name);
            return arr;
        })
        .catch((err) => err);

export default fetchAxios;
