const playthat = 'Pl ayTha tF u nkyM usi c';

const quitarBlanco = (str) => {
    // return str.split(' ').join('');
    return str.replace(/\s+/g, '');
};

const nuevoStr = quitarBlanco(playthat);
console.log({ nuevoStr });

const obtenerDigitos = (str) => {
    // return str.split('').filter((item) => Number(item)).join('');
    return str.replace(/\D+/g, '');
};

const strDeObtenerDigitos = obtenerDigitos('0s1a3y5w7h9a2t4? 6! 8? 0');
console.log({ strDeObtenerDigitos });

const acronimos = (str) => {
    const arr = str.split(' ');
    const map = new Map();
    for (const w of arr) {
        if (w) {
            map.set(w[0], w);
        }
    }
    let arconim = '';
    for ([key] of map.entries()) {
        arconim += key.toUpperCase();
    }
    // console.log(map);
    return arconim;
};

const resultDeAcronimos1 = acronimos(
    '¡En vivo desde Nueva York, es sábado por la noche!',
);
const resultDeAcronimos2 = acronimos(
    'no hay almuerzo gratis. Debes pagar por tu comida", devuelve ',
);

console.log({ resultDeAcronimos1, resultDeAcronimos2 });

const contarNoEspacios = (str) => {
    return str.match(/\S/g).length;
};

const noEspacios = contarNoEspacios('Amor, me estás volviendo loca');
const noEspacios2 = contarNoEspacios('Honey pie, you are driving me crazy');
console.log({ noEspacios, noEspacios2 });
