const obj = {
  nombre: "Coding",
  apellido: "Dojo",
  direcciones: [
    { calle: "miguel de flores", numero: "12", ciudad: "Viña del Mar" },
    { calle: "la victoria", numero: "244 b", ciudad: "Santiago" },
  ],
  amigos: {
    conocidos: [],
    mejorAmigo: {
      nombre: "Juan",
      apellidos: "Torres De Dios",
      mascota: {
        tipo: "perro",
        color: "negro",
        raza: "british bull dog",
        nombre: "Juanes II",
      },
    },
  },
};
const obj2 = {
  nombre: "Coding",
  apellido: "Dojo",
  direcciones: [
    { calle: "miguel de flores", numero: "12", ciudad: "Viña del Mar" },
    { calle: "la victoria", numero: "244 b", ciudad: "Santiago" },
  ],
};

const nombreDePerro = (o) => {
  const { amigos } = o;
  //   const nombreDePerro =
  //     amigos &&
  //     amigos.mejorAmigo &&
  //     amigos.mejorAmigo.mascota &&
  //     amigos.mejorAmigo.mascota.nombre
  //       ? amigos.mejorAmigo.mascota.nombre
  //       : "no hay perro";
  const nombreDePerro = amigos?.mejorAmigo?.mascota?.nombre || "no hay perro";
  return `${nombreDePerro}`;
};

console.log(nombreDePerro(obj));
console.log(nombreDePerro(obj2));

// const googleChromeTrabajo = (clickFunction) => {
//   const evento = {
//     preventDefault: () => console.log("Prevent Default Ejecutado"),
//     mensaje: "Evento",
//     target: "input 1",
//   };
//   clickFunction(evento);
// };

// const onClick = (e) => {
//   console.log(e);
// };

// googleChromeTrabajo(onClick);

