import React from 'react';

const Contenido = (props) => {
    const { texto, isSelected } = props;
    return (
        <section className={'contenido' + (isSelected ? ' selected' : '')}>
            <h1>{texto}</h1>
        </section>
    );
};

export default Contenido;
