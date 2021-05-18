require('dotenv').config();
// const path = require('path');
const express = require('express');
const cors = require('cors')
// const socketio = require('socket.io');

const app = express();

require('./config/connectDB')();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== 'production') {
  const allowCrossDomain = (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Cache-Control',
    );

    app.use(allowCrossDomain);
  };
}

app.use('/api', require('./routes/api'))

//if (process.env.NODE_ENV === 'production') {
// set static folder
//  app.use(express.static('client/build'));
//  app.get('*', (req, res) => {
//    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//  });
//}

const port = process.env.PORT || 5000;

const server = app.listen(port, () =>
  console.log(`1: El servidor está incendido en port ${port}`),
);

// const io = socketio(server);

// io.on('connect', (socket) => {
//   console.log(`Client connected to ${socket}`);
// });