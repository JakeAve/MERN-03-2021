const login = async (data) => {
    try {
        const res = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await res.json();
        console.log({json, res})
        if (!res.ok) {
            return { success: false, data: json };
        }
        return { success: true, data: json };
    } catch (e) {
        console.error(e);
        return { success: false, data: { errors: { error: e } } };
    }
};

export default login;
