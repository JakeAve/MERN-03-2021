class Ninja {
  constructor(nombre, velocidad = 3, salud = 0, fuerza = 3) {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = velocidad;
    this.fuerza = fuerza;
  }

  sayName() {
    console.log(this.nombre);
  }

  showStats() {
    const { nombre, salud, fuerza, velocidad } = this;
    return {
      nombre,
      salud,
      fuerza,
      velocidad,
    };
    // return {
    //   salud: this.salud,
    //   fuerza: this.fuerza,
    //   velocidad: this.velocidad
    // }
  }

  drinkSake() {
    this.salud += 10;
  }
}

module.exports = Ninja;

// const jake = new Ninja("Jake");

// jake.sayName();
// jake.drinkSake();
// console.log(jake.showStats());
