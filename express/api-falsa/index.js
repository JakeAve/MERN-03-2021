require('dotenv').config();
const express = require('express');
const faker = require('faker');
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static('client/build'));
app.use('/api', require('./api'));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
