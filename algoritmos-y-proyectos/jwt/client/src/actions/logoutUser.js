const loginUser = async (data) => {
    try {
        const response = await fetch('/auth/logout', {
            method: 'POST',
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
