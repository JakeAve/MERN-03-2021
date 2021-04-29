import React from 'react';

const Result = (props) => {
    const { titulo, estadisticas = [] } = props;

    const divs = estadisticas.map(([label, val], key) => (
        <div key={key}>
            <strong>{label}</strong>: {val}
        </div>
    ));

    return (
        <div>
            <h1>{titulo}</h1>
            {divs}
        </div>
    );
};

export default Result;
