const getAuthors = async (id) => {
    try {
        let res;
        if (id) res = await fetch(`/api/authors-by-user/${id}`);
        else res = await fetch('/api/author');
        if (!res.ok) throw new Error(res.text);
        const json = await res.json();
        return { success: true, data: json };
    } catch (e) {
        console.error(e);
        return { success: false, data: [] };
    }
};

export default getAuthors;
