const { default: mongoose } = require("mongoose");

const clienteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true
  },
  situacao: {
    type: Boolean,
    required: true
  }
});

const cliente = new mongoose.model("Cliente", clienteSchema);

module.exports = cliente;