const Ninja = require("./ninja");

class Sensi extends Ninja {
  constructor(nombre) {
    super(nombre);
    this.sabiduría = 10;
    this.salud = 200;
    this.velocidad = 10;
    this.fuerza = 10;
  }

  speakWisdom() {
    this.drinkSake(); // super.drinkSake();
    console.log(
      `Hay cosas de la vida que jamás debes perder: la esperanza, la paciencia y la clave de wifi`
    );
  }

  showStats() {
    const { sabiduría } = this;
    return { ...super.showStats(), sabiduría };
  }
}

const srMiyagi = new Sensi("Mister Miyagi");

srMiyagi.speakWisdom();
console.log(srMiyagi.showStats());
