import { useEffect, useState } from 'react';
import './App.css';
import Caja from './components/Caja';
import FormularioDeColor from './components/FormularioDeColor';
import PadreDeCajas from './components/PadreDeCajas';

function App() {
    const [colores, setColores] = useState([]);
    const [color, setColor] = useState('');
    const [propsDeCaja, setPropsDeCaja] = useState();

    useEffect(() => {
        // if (color) setColores((cs) => [color, ...cs]);
        if (propsDeCaja)
            setColores((existiente) => [propsDeCaja, ...existiente]);
    // }, [color]);
    }, [propsDeCaja]);

    // const cajas = colores.map((c, index) => <Caja color={c} key={index} />);

    const cajas = colores.map(({ color, tamaño }, index) => (
        <Caja color={color} tamaño={tamaño} key={index} />
    ));

    return (
        <>
            {/* <FormularioDeColor añadirColor={setColor} /> */}
            <FormularioDeColor añadirCaja={setPropsDeCaja} />
            <PadreDeCajas>{cajas}</PadreDeCajas>
        </>
    );
}

export default App;
