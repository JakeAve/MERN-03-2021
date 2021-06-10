const refreshToken = async () => {
    try {
        const response = await fetch('/auth/refresh', {
            method: 'GET',
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

export default refreshToken;
