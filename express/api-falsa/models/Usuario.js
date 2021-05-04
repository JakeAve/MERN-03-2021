const faker = require('faker');
const crypto = require('crypto');

class Usuario {
    constructor() {
        (this._id = crypto.randomUUID()),
            (this.firstName = faker.name.firstName()),
            (this.lastName = faker.name.lastName());
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

module.exports = Usuario;
