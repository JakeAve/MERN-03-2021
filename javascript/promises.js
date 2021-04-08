const buscarArchivo = (path) => {
  let resultado;
  return new Promise((res) => {
    setTimeout(() => {
      resultado = `texto`;
      res(resultado);
    }, 1000);
  });
};

const leerContenidoDelArchivo = (archivo) => {
  return archivo().then((val) => {
    const contenido = `<h1>${val}</h1>`;
    console.log(`El contenido es esto: ${contenido}`);
    return contenido
  });
};

const contenidoDelArchivo = leerContenidoDelArchivo(buscarArchivo);

contenidoDelArchivo.then((val) => console.log({contenido: val}))

console.log({ contenidoDelArchivo });

console.log("ultima linea");
