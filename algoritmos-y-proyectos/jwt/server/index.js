require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

require('./db/connect')();

app.use(cookieParser());
if (process.env.NODE_ENV !== 'production') app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api", require("./routes/api"));

app.use('/auth', require('./auth/router'));
app.use('/api', require('./api/router'));

const port = process.env.PORT || 5000;

app.listen(port, () =>
    console.log(`1: El servidor está incendido en port ${port}`),
);
