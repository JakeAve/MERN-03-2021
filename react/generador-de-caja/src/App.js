import { useEffect, useState } from 'react';
import './App.css';
import FormularioDeColor from './components/FormularioDeColor';
import PadreDeCajas from './components/PadreDeCajas';
import Caja from './components/Caja';

function App() {
    const [colores, setColores] = useState([]);
    const [propDeNuevaCaja, setPropDeNuevaCaja] = useState();

    useEffect(() => {
        if (propDeNuevaCaja)
            setColores((existentes) => [propDeNuevaCaja, ...existentes]);
    }, [propDeNuevaCaja]);

    const cajas = colores.map(({ color, tamaño }, index) => (
        <Caja color={color} tamaño={tamaño} key={index} />
    ));

    return (
        <>
            <FormularioDeColor añadirPropDeNuevaCaja={setPropDeNuevaCaja} />
            <PadreDeCajas>{cajas}</PadreDeCajas>
        </>
    );
}

export default App;
