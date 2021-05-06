const faker = require('faker');

class Image {
    constructor() {
        this.image = faker.image.food()
        this.imageURL = faker.image.imageUrl()
    }
}

module.exports = Image
