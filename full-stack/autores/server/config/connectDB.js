const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_LINK, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('2: Conectado a MongoDB');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;