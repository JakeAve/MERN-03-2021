const fetchGrupos = async () => {
    try {
        const res = await fetch('https://swapi.dev/api/');
        const obj = await res.json();
        const entries = Object.entries(obj);
        console.log({ entries });
        return entries;
    } catch (e) {
        throw e;
    }
};

export default fetchGrupos;
