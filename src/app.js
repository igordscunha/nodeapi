const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
  console.log("Conectado ao banco de dados com sucesso")
}).catch((error) => {
  console.log("Não foi possivel conectar ao banco de dados... ", error)
});

const clienteRoutes = require('./routes/clienteRoutes');
app.use('/api/clientes', clienteRoutes); //definir a url para as requisições

module.exports = app;