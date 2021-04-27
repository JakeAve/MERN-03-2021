// const buscarArchivo = (path) => {
//   let resultado;
//   return new Promise((res) => {
//     setTimeout(() => {
//       resultado = `texto`;
//       res(resultado);
//     }, 1000);
//   });
// };

// const leerContenidoDelArchivo = (archivo) => {
//   return archivo().then((val) => {
//     const contenido = `<h1>${val}</h1>`;
//     console.log(`El contenido es esto: ${contenido}`);
//     return contenido
//   });
// };

// const contenidoDelArchivo = leerContenidoDelArchivo(buscarArchivo);

// contenidoDelArchivo.then((val) => console.log({contenido: val}))

// console.log({ contenidoDelArchivo });

// console.log("ultima linea");

console.log('Aplicación está funcionando');

const buscarInformacionDeAPI = () =>
    new Promise((resolve, reject) => {
        console.log('Promesa inicializanda (barra de progreso)');
        setTimeout(() => {
            console.log('Promesa cumplida');
            resolve('data de base de datos');
            // reject('error de conección');
        }, 3000);
    });

const promesa = buscarInformacionDeAPI();

promesa
    .then((val) => {
        console.log('Cumplida (esconder barra de progreso):', val);
        return 'Información procesada';
    })
    .then((val) => console.log(`El otro valor es: ${val}`, {promesa}))
    .catch((err) => console.error(err));

console.log(promesa);
