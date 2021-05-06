const mongoose = require('mongoose');

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.DB_LINK, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        console.log('Se ha conectado a mongo db')
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectMongo