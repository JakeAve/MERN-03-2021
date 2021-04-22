import React, { useRef, useState } from 'react';
import Contenido from './Contenido';
import Etiqueta from './Etiqueta';

const Tabs = (props) => {
    const { tabs } = props;
    const [selecionado, setSelecionado] = useState(0);
    const padreDeEtiquetas = useRef();

    const changeButtonColor = (btn) => {
        padreDeEtiquetas.current
            .querySelectorAll('button')
            .forEach((b) => b.classList.remove('selected'));
        btn.classList.add('selected');
    };

    const etiquetas = tabs.map(({ etiqueta }, index) => {
        const isSelected = index === selecionado;
        return (
            <Etiqueta
                texto={etiqueta}
                index={index}
                setSelecionado={setSelecionado}
                callback={changeButtonColor}
                key={index}
                isSelected={isSelected}
            />
        );
    });

    const contenidos = tabs.map(({ contenido }, index) => {
        const isSelected = index === selecionado;
        return (
            <Contenido
                texto={contenido}
                index={index}
                key={index}
                isSelected={isSelected}
            />
        );
    });

    return (
        <div className="tab-section">
            <div ref={padreDeEtiquetas}>{etiquetas}</div>
            <div className="contenido-de-tabs">{contenidos[selecionado]}</div>
        </div>
    );
};

export default Tabs;
