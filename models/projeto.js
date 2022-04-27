// Importa mongoose
const mongoose = require('mongoose');

const projetoModel = new mongoose.Schema({
    titulo: { type: String, required: true },
    ferramentas: { type: String, required: true },
    imagem: { type: String, required: true },
    linkBack: { type: String, required: true },
    linkFront: { type: String, required: true },
    linkSite: { type: String, required: true },
    dataCriacao: { type: Date, default: Date.now }
})

const Certificado = mongoose.model("projeto", projetoModel);

module.exports = Certificado;