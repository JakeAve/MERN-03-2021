require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors'); // This is new

require('./config/connectDB')()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/api'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening at Port ${port}`);
});
