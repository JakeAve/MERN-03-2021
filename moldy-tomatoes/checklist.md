# Proyecto de Node

- [ ] `npm init -y`
- [ ] `npx create-react-app client`
- [ ] `rm -rf client/.git`
- [ ] `npm i bcrypt cookie-parser cors dotenv express jsonwebtoken mongoose`
- [ ] `npm i concurrently cross-env nodemon -D`
- [ ] Crear .gitignore
- [ ] Poner el siguiente archivos en .gitignore
```
/node_modules
.env
```
- [ ] `git init`
- [ ] Crear los scripts en package.json
``` json
  "scripts": {
    "build": "yarn --cwd client start",
    "dev:client": "yarn --cwd client start",
    "dev:server": "nodemon server --ignore client/",
    "dev": "concurrently \"npm run dev:server\" \"npm run dev:client\"",
    "start": "cross-env NODE_ENV=production node server"
  },
```
- [ ] Crear .env
```
PORT=5000
DB_LINK = mongodb+srv://<usuario-tuyo>:<contraseña-tuya>@cluster0.tvczj.mongodb.net/<inventas-un-nombre-de-base-de-datos>?retryWrites=true&w=majority
JWT_SECRET = a_secret_phrase
NODE_ENV = develop
```
- [ ] Creat server.js
``` javascript
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

require("./config/connectDB")();

app.use(cookieParser());
if (process.env.NODE_ENV !== "production") app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/api"));

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`1: El servidor está incendido en port ${port}`)
);

```
- [ ] Create config/connectDB.js
``` javascript
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
```
- [ ] Crear router/api.js
``` javascript
const { Router } = require('express');
const router = Router();

// rutas para api

module.exports = router;
```
