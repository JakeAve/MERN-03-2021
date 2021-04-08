// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
// // const [firstAnimal, secondAnimal] = animals;

// const [firstAnimal, secondAnimal, ...otherAnimals] = animals;

// console.log({otherAnimals})

// const person = {
//   firstName: "Bob",
//   lastName: "Marley",
//   email: "bob@marley.com",
//   password: "sekureP@ssw0rd9",
//   username: "barley",
//   addresses: [
//     {
//       address: "1600 Pennsylvania Avenue",
//       city: "Washington, D.C.",
//       zipcode: "20500",
//     },
//     {
//       address: "221B Baker St.",
//       city: "London",
//       zipcode: "WC2N 5DU",
//     },
//   ],
//   createdAt: 1543945177623,
// };

// const { firstName, lastName, ...attributes } = person;

// const fullName = `${firstName}, ${lastName}`;

// const personParaNuevoBaseDeDatos = {fullName, ...attributes};

// console.log({ personParaNuevoBaseDeDatos });


const canción = {
    nombre: 'Me Rehúso',
    artista: 'Danny Ocean',
    album: 'Me Rehúso - Single',
    foto: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Me_Reh%C3%BAso_cover.jpg/220px-Me_Reh%C3%BAso_cover.jpg',
    listens: 0
}

const copia = {...canción};
copia.listens++;
copia.album = `Album Real de Danny Ocean`


console.log({canción, copia})

// class Canción {
//     constructor(nombre, artista, album, foto) {
//         this.nombre = nombre;
//         this.artista = artista;
//         this.album = album;
//         this.foto = foto,
//         this.listens = 0;
//     }
// }

// const callMeMaybe = new Canción('Call Me Maybe', 'Carly Rae Jeppson', 'Call Me Maybe - Single', 'urllasldjf');

// const {artista: artistaDeCallMeMaybe} = callMeMaybe;

// console.log({artistaDeCallMeMaybe})