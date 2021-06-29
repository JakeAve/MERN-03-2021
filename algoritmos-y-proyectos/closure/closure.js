// Cuando una función tiene acceso a un variable desde un alcance ajena y lo encapsula dentro de sí, es un closure / clausula.
// Usamos cloures para crear funciones dynámicas y también para encapsular información privada.

function generarNumeroSuccesivo() {
    // Local “free” variable that ends up within the closure
    let num = 0;
    function checkNumber() {
        console.log(num);
    }
    num++;
    return checkNumber;
}

const number = generarNumeroSuccesivo();
number(); // 1
const number2 = generarNumeroSuccesivo();
number2(); // 1

var nombreGlobal = 'Nombre Global';

function iniciar() {
    var nombre = 'Mozilla'; // La variable nombre es una variable local creada por iniciar.
    function mostrarNombre() {
        // La función mostrarNombre es una función interna, una clausura.
        console.log(nombre, nombreGlobal); // Usa una variable declarada en la función externa.
    }
    mostrarNombre();
}

// iniciar();

function creaFunc() {
    var nombre = 'Mozilla';
    function muestraNombre() {
        console.log(nombre);
    }
    return muestraNombre;
}

var miFunc = creaFunc();
// miFunc();

function creaSumador(x) {
    return function (y) {
        return x + y;
    };
}

var suma5 = creaSumador(5);
var suma10 = creaSumador(10);

// console.log(suma5(2)); // muestra 7
// console.log(suma10(2)); // muestra 12

var Counter = (function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        },
    };
})();

// console.log(Counter.value()); /* Muestra 0 */
Counter.increment();
Counter.increment();
// console.log(Counter.value()); /* Muestra 2 */
Counter.decrement();
// console.log(Counter.value()); /* Muestra 1 */

function crearBase(argumento) {
    return function (argumento2) {
        return argumento + argumento2;
    };
}

var sumarSeis = crearBase(6);
// console.log(sumarSeis(10)); // retornar 16
// console.log(sumarSeis(21)); // retornar 27
const timeoutStack = (function () {
    for (let i = 0; i < 3; i++) {
        const log = () => {
            console.log(i);
        };

        setTimeout(log, 100);
    }
})();
// const timeoutStack = (function () {
//     for (var i = 0; i < 3; i++) {
//         const log = () => {
//             console.log(i);
//         };

//         setTimeout(log, 100);
//     }
// })();

// for (var i = 0; i < 3; i++) {
//     setTimeout(function(i_local) {
//       return function() { console.log(i_local); }
//     }(i), 1000 + i);
//   }
