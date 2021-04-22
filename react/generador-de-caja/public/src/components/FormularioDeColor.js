import React, { useState } from 'react';

const FormularioDeColor = (props) => {
    const { añadirColor, añadirCaja } = props;
    // const [color, setColor] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const obj = {};
        for (const [key, val] of formData.entries()) obj[key] = val;
        if (obj['color'].trim() === '')
            return alert('Tienes que entrar un color!');
        if (obj['tamaño'].trim() === '')
            return alert('Tienes que poner un tamaño');

        añadirCaja(obj);
        form.querySelectorAll('input[type="text"]').forEach((input, index) => {
            if (index === 0) input.focus();
            input.value = '';
        });

        // if (color === '') {
        //     alert('Tienes que entrar un color!');
        // } else {
        //     añadirColor(color);
        // }
    };

    return (
        <form onSubmit={onSubmit} className="formulario-de-color">
            <label htmlFor="color-texto">Color</label>
            <input
                // onChange={(e) => setColor(e.target.value)}
                // value={color}
                id="color-texto"
                name="color"
                type="text"
            />
            {/* <label htmlFor="color-color">Color</label>
            <input type="color" name="color" /> */}
            <label htmlFor="tamaño">Size</label>
            <input id="tamaño" name="tamaño" type="text" />
            <input type="submit" value="Añadir" />
        </form>
    );
};

export default FormularioDeColor;
