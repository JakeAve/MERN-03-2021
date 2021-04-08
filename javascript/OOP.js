// parent Vehicle class
class Vehicle {
    constructor(manufacturer, model, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.miles = 0;
    }

    drive() {
        this.miles += 10;
        console.log(`You drove your ${ this.constructor.name } and it now has ${this.miles} miles on it.`);
    }
    // simple method in the parent class
    parentFunction(){
        return "This is coming from the parent!";
    }
}

// const miCoche = new Vehicle('Toyota', 'Camry', 'azúl');
// const {manufacturer: jakesCoche} = miCoche;
// miCoche.drive();

// const {miles: jakesMiles} = miCoche;
// console.log(`Jake's car is a ${jakesCoche}`)
// console.log(`He has driven it ${jakesMiles} miles`)

// child M5 class
class M5 extends Vehicle {
    constructor(color) {
        super("BMW", "M5", color);
    }
    // simple function in the child class
    childFunction() {
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }

    parentFunction() {
        return `Viene de m5`
    }

    abrirTechoDeCorredizo() {
        console.log('opened')
    }
}

const m5 = new M5("Blue");
// console.log(m5);
// m5.abrirTechoDeCorredizo();
m5.childFunction();
m5.drive();
