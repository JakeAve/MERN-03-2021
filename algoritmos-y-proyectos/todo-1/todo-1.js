// TODO 1 Arreglos

// push al frente

const pushAlFrente = (arr, val) => {
    return [val, ...arr];
};

const arregloDePrueba = ['a', 'b', 'c', 'd', 'e'];
const resultadoDePushAlFrente = pushAlFrente(arregloDePrueba, 'z');

// console.log({ nuevoArreglo: resultadoDePushAlFrente });

// pop al frente

const popAlFrente = (arr) => {
    return arr.reverse().pop();
};

const resuldadoDePopAlFrente = popAlFrente(arregloDePrueba);
// console.log({ resuldadoDePopAlFrente });
// console.log({ arregloDePrueba });

// insert en

const insertAt = (arr, index, val) => {
    const newarr = [];
    for (let i = 0; i < arr.length + 1; i++) {
        if (i < index) newarr[i] = arr[i];
        else if (i === index) newarr[i] = val;
        else newarr[i] = arr[i - 1];
    }
    return newarr;
};

const abc = ['a', 'c', 'd', 'e'];

const resuldadoDeInsertAt = insertAt(abc, 1, 'b');
console.log({ resuldadoDeInsertAt });
console.log({ abc });

// Pares de Intercambio

const intercambiar = (arr) => {
    for (let i = 1; i < arr.length; i += 2) {
        const temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
    }

    return arr;
};

const arregloImpar = [1, 2, 3, 4, 5];
const arregloPar = [1, 2, 3, 4, 5, 6];
const impar = intercambiar(arregloImpar);
const par = intercambiar(arregloPar);
console.log({ impar, par });

const desarrolladores = [
    'Pedro',
    'Pedro',
    'Kevin',
    'Juan',
    'Juan',
    'Juan',
    'Paco',
];

const removerDuplicados = (arr) => {
    const nuevoArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            nuevoArr[nuevoArr.length] = arr[i];
        }
    }

    return nuevoArr;
};

const resultadoDeRemoverDuplicados = removerDuplicados(desarrolladores);
console.log({ resultadoDeRemoverDuplicados });
