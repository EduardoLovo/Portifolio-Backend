// Importa mongoose
const mongoose = require('mongoose');

const stackModel = new mongoose.Schema({
    titulo: { type: String, required: true },
    valor: { type: Number, required: true },
    dataCriacao: { type: Date, default: Date.now }
})

const Stack = mongoose.model("stack", stackModel)

module.exports = Stack;