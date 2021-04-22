import React from 'react';

const PadreDeCajas = (props) => {
    const {children} = props;
    return (
        <div className="padre-de-cajas">
            {children}
        </div>
    );
}

export default PadreDeCajas;
