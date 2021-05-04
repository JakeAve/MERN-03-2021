const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// req is shorthand for request
// res is shorthand for response
app.use('/api', require('./api')); // index.js es un archivo especial - no tienes que poner ./api/index.js

// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
