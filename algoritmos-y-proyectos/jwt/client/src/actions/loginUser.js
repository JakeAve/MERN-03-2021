const loginUser = async (data) => {
    try {
        const response = await fetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const result = await response.json();
        if (response.ok) return { success: true, data: result };
        else return { success: false, data: result };
    } catch (err) {
        console.error(err);
        window.alert('An unexpected error has occured');
    }
};

export default loginUser;
