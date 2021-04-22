import React from 'react';

const Caja = (props) => {
    const {color, tamaño} = props;
    const pixelados = tamaño ? tamaño + 'px' : '';
    return (
        <div className="caja" style={{backgroundColor: color, height: pixelados, width: pixelados}}>
            
        </div>
    );
}

export default Caja;
