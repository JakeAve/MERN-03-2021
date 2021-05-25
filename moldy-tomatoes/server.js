require("dotenv").config();
// const path = require('path');
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const socketio = require('socket.io');

const app = express();

require("./config/connectDB")();

app.use(cookieParser());
if (process.env.NODE_ENV !== "production") app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/api"));

//if (process.env.NODE_ENV === 'production') {
// set static folder
//  app.use(express.static('client/build'));
//  app.get('*', (req, res) => {
//    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//  });
//}

const port = process.env.PORT || 5000;

const server = app.listen(port, () =>
  console.log(`1: El servidor está incendido en port ${port}`)
);

// const io = socketio(server);

// io.on('connect', (socket) => {
//   console.log(`Client connected to ${socket}`);
// });
