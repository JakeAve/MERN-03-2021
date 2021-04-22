import React from 'react';

const Etiqueta = (props) => {
    const { texto, index, setSelecionado, callback, isSelected } = props;

    const onClick = (e) => {
        setSelecionado(index);
        callback(e.target);
    };

    return (
        <button
            className={'etiqueta' + (isSelected ? ' selected' : '')}
            onClick={onClick}
        >
            {texto}
        </button>
    );
};

export default Etiqueta;
