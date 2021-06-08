const registerUser = async (data) => {
    try {
        const response = await fetch('/auth/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log({ status: response.status });

        const result = await response.json();
        if (response.ok) return { success: true, data: result };
        else if (response.status === 409)
            return {
                success: false,
                data: {
                    message: 'This email is already associated with an account',
                },
            };
        else return { success: false, data: result };
    } catch (err) {
        console.error(err);
        window.alert('An unexpected error has occured');
        return { success: false, data: { message: 'Unexpected Error' } };
    }
};

export default registerUser;
