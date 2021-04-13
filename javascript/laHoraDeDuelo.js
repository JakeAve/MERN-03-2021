class Carta {
  constructor(nombre, costo) {
    this.nombre = nombre;
    this.costo = costo;
  }
}

class Unidad extends Carta {
  constructor(nombre, costo, poder, res) {
    super(nombre, costo);
    this.poder = poder;
    this.res = res;
    this.efectos = [];
    this.agresores = [];
    this.asesinato = null;
  }

  atacar(recipiente) {
    if (!recipiente instanceof Unidad)
      throw new Error("Recipiente tiene que ser una Unidad");

    recipiente.agresores.push(this);
    recipiente.res = recipiente.res - this.poder;
    if (recipiente.res <= 0) {
      recipiente.asesinato = this;
      console.log(`${recipiente.nombre} ya sta muerto por ${recipiente.asesinato.nombre}`);
    }
  }
}

class Efecto extends Carta {
  constructor(nombre, costo, texto, stat, magnitud) {
    super(nombre, costo);
    this.magnitud = magnitud;
    this.stat = stat;
    this.texto = texto;
  }

  aplicar(recipiente) {
    if (recipiente instanceof Unidad) {
      recipiente[this.stat] += this.magnitud;
      recipiente.efectos.push(this);
    } else throw new Error("Recipiente tiene que ser una Unidad");
  }
}

const red = new Unidad("Red Belt Ninja", 3, 3, 3);
const black = new Unidad("Black Belt Ninja", 4, 5, 4);

const hardAlgo = new Efecto(
  "Hard Algorithim",
  2,
  "increase target's resilience by 3",
  "res",
  3
);
const unhandled = new Efecto(
  "Unhandled Promise Rejection",
  1,
  "reduce target's resilience by 2",
  "res",
  -2
);
const pairProg = new Efecto(
  "Pair Programming",
  3,
  "increase target's power by 2",
  "poder",
  2
);

hardAlgo.aplicar(red);
// console.log(red);

unhandled.aplicar(red);
// console.log(red);

pairProg.aplicar(red);
// console.log(red);

red.atacar(black);
console.log(black);
