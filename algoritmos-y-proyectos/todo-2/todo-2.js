const reverso = (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
        const var1 = arr[i];
        const var2 = arr[arr.length - 1 - i];
        arr[i] = var2;
        arr[arr.length - i - 1] = var1;
    }

    return arr;
};

const arregloNormal = [3, 5, 1, 7, 8, 3, 4];

const resuldatoDeReversa = reverso(arregloNormal);
// console.table({ arregloNormal, resuldatoDeReversa });

const girar = (arr, num) => {
    const nuevoArr = [];
    const ultimoIndex = arr.length - 1;
    num =  num % arr.length;

    for (let i = 0; i < arr.length; i++) {
        const primerVal = arr[i];
        const sumo = i + num;
        const nuevoIndex = sumo > ultimoIndex ? sumo - ultimoIndex - 1 : sumo;
        nuevoArr[nuevoIndex] = primerVal;
    }

    return nuevoArr;
};

// const girar = (arr, shiftBy) => {
//     let arrRot = new Array(arr.length);
//     for (let i = 0; i < arr.length; i++) {
//         if (i + shiftBy > arr.length - 1) {
//             arrRot[i + shiftBy - arr.length] = arr[i];
//         } else {
//             arrRot[i + shiftBy] = arr[i];
//         }
//     }
//     //console.log(arr,arrRot);

//     return arrRot;
// };

const arregloParaGirar = [1, 2, 3, 4, 5, 6, 7, 8];
const resultadoDeGirar1 = girar(arregloParaGirar, 1);
const resultadoDeGirar2 = girar(arregloParaGirar, 2);
const resultadoDeGirar8 = girar(arregloParaGirar, 8);
const resultadoDeGirar10 = girar(arregloParaGirar, 10);
console.table({
    arregloParaGirar,
    resultadoDeGirar1,
    resultadoDeGirar2,
    resultadoDeGirar8,
    resultadoDeGirar10,
});
