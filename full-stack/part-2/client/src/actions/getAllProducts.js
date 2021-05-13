const getAllProducts = async () => {
    try {
        const res = await fetch('http://localhost:5000/api/product');
        if (!res.ok) throw new Error(res.text);
        const json = await res.json();
        return { success: true, data: json };
    } catch (e) {
        console.error(e);
        return { success: false, data: e.message };
    }
};

export default getAllProducts;
