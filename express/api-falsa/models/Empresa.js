const faker = require('faker');
const crypto = require('crypto');

class Empresa {
    constructor() {
        (this._id = crypto.randomUUID()),
            (this.nombre = faker.company.companyName());
        this.dirección = {
            calle: faker.address.streetName(),
            ciudad: faker.address.city(),
            provincia: faker.address.state(),
            postal: faker.address.zipCode(),
            pais: faker.address.country(),
        };
    }
}

module.exports = Empresa;
