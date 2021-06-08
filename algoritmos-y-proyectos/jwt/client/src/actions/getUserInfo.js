const getUserInfo = async (id) => {
    try {
        const response = await fetch(`/api/user/${id}`, {
            method: 'GET',
        });

        const result = await response.json();
        if (response.ok) return { success: true, data: result };
        else return { success: false, data: result };
    } catch (err) {
        console.error(err);
        window.alert('An unexpected error has occured');
    }
};

export default getUserInfo;
