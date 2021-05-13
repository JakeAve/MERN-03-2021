const postNewForm = async (data) => {
    try {
        const res = await fetch('http://localhost:5000/api/product', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!res.ok) throw new Error(res.text);
        const json = await res.json();
        return { success: true, data: json };
    } catch (e) {
        console.error(e);
        return { success: false, data: e.message };
    }
};

export default postNewForm;
