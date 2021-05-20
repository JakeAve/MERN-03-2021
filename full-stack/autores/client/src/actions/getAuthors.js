const getAuthors = async () => {
    try {
        const res = await fetch('/api/author');
        if (!res.ok) throw new Error(res.text);
        const json = await res.json();
        return { success: true, data: json };
    } catch (e) {
        console.error(e);
        return { success: false, data: e.message };
    }
};

export default getAuthors;
