// Importa mongoose
const mongoose = require('mongoose');

const certificadoModel = new mongoose.Schema({
    titulo: { type: String, required: true },
    modulo: { type: String, required: true },
    imagem: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now }
})

const Certificado = mongoose.model("certificado", certificadoModel);

module.exports = Certificado;