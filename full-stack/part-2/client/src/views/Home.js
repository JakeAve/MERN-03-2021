import React from 'react';
import Formulario from '../components/Formulario';
import ListaDeProductos from '../components/ListaDeProductos';

const Home = () => {
    return (
        <div>
            <Formulario />
            <hr />
            <ListaDeProductos />
        </div>
    );
}

export default Home;
