const createMovie = async (data) => {
    try {
        const { title, createdBy, content, rating } = data;
        const res = await fetch('/api/movie', {
            method: 'POST',
            body: JSON.stringify({ title }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await res.json();
        if (!res.ok) {
            throw new Error(res.statusText);
        }

        const { _id } = json;
        const reviewRes = await fetch('/api/review',
        {
            method: 'POST',
            body: JSON.stringify({
                content,
                createdBy: '60ac3d24eb7df37c3914d76e',
                movieId: _id,
                rating,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        await reviewRes.json();
        if (!reviewRes) throw new Error(reviewRes.statusText);
        return { success: true, data: json };
    } catch (e) {
        console.error(e);
        return { success: false, data: { errors: { error: e } } };
    }
};

export default createMovie;
