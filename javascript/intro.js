// var os = require('os');

// console.log(os.cpus());
// console.log(os.totalmem());
// console.log(os.freemem());

// var beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//     function actuallyPrintingNames() {
//         const index;
//         let name;
//         for (index = 0; index < names.length; index++) {
//           name = names[index];
//           console.log(name + ' was found at index ' + index);
//         }
//         console.log('name and index after loop is ' + name + ':' + index);
//         console.log({index})
//       }

//   actuallyPrintingNames();
// }
// printNames(beatles);

// console.log(magicalUnicorns);
// console.log(grita(magicalUnicorns));

// var magicalUnicorns = "🦄";

// function grita(animal) {
//   return "The animal says " + animal;
// }

// console.log(magicalUnicorns);

// console.log(grita(magicalUnicorns));

const bob = {
  firstName: "Bob",
  lastName: "Marley",
  email: "bob@marley.com",
  password: "sekureP@ssw0rd9",
  username: "barley",
  addresses: [
    {
      address: "1600 Pennsylvania Avenue",
      city: "Washington, D.C.",
      zipcode: "20500",
    },
    {
      address: "221B Baker St.",
      city: "London",
      zipcode: "WC2N 5DU",
    },
  ],
  createdAt: 1543945177623,
};

const roberto = {
  firstName: "Roberto",
  lastName: "Marley",
  email: "bob@marley.com",
  password: "sekureP@ssw0rd9",
  username: "barley",
  addresses: [
    {
      address: "1600 Pennsylvania Avenue",
      city: "Washington, D.C.",
      zipcode: "20500",
    },
    {
      address: "221B Baker St.",
      city: "London",
      zipcode: "WC2N 5DU",
    },
    {
      address: "1232 Calle Miguel de Santis",
      city: "Santiago",
      zipcode: "WC2N 5DU",
    },
  ],
  createdAt: 1543945177623,
};

const firstName = 'Pedro Pascal'

const saludo = (usuario) => {
  const {
    firstName: primerNombreDelUsuario,
    addresses: [{ address: direccionDeCalle, city }],
  } = usuario;
  return `Hola, ${primerNombreDelUsuario}. Tú vives en ${direccionDeCalle}, ${city}`;
};

console.log(saludo(bob));
console.log(saludo(roberto));
