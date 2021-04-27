import React from 'react';
import { useUser } from '../providers/UserProvider';

const Caja = (props) => {
    const { color, tamaño } = props;
    const pixelados = tamaño + 'px';
    
    const user = useUser();
    const { cambiarUsuario } = user;
    cambiarUsuario('Miguel');
    console.log({ user });

    return (
        <div
            className="caja"
            style={{
                backgroundColor: color,
                height: pixelados,
                width: pixelados,
            }}
        >
            {user.firstName}
        </div>
    );
};

export default Caja;
