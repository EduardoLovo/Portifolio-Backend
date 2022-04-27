const mongoose = require('mongoose');

const authModel = new mongoose.Schema({
    nome: { type: String, required: true },
    senha: { type: String, required: true },
})

const Auth = mongoose.model("auth", authModel);

module.exports = Auth;