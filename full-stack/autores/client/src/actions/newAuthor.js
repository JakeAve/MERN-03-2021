const newAuthor = async (data) => {
    try {
        const res = await fetch('http://localhost:5000/api/author', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await res.json();
        if (!res.ok) {
            const errors = Object.entries(json.errors).map(
                ([field, { message }]) => ({ field, message }),
            );
            return { success: false, data: errors };
        }
        return { success: true, data: json };
    } catch (e) {
        console.error(e);
        return { success: false, data: { errors: { error: e } } };
    }
};

export default newAuthor;
