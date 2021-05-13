const deleteProduct = async (id) => {
    try {
        const res = await fetch(`http://localhost:5000/api/product/${id}`, {
            method: 'DELETE',
        });
        if (!res.ok) throw new Error(res.text);
        return { success: true, data: res.text };
    } catch (e) {
        console.error(e);
        return { success: false, data: e.message };
    }
};

export default deleteProduct;
