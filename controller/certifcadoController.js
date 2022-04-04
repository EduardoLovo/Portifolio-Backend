// const res = require('express/lib/response');
const Certificado = require('../models/certificado')

const getAll = async (req, res) => {
    await Certificado.find({})
        .then((certificado) => {
            res.send(certificado);
        })
        .catch((err) => {
            console.log(err);
        })
};

const create = async (req, res) => {
    await Certificado.create(req.body)
        .then(() => {
            res.status(200).send("Certificado adicionado com sucesso")
        })
        .catch((err) => {
            res.status(400).send("Erro ao adicionar certificado")
        })
};

const getById = async (req, res) => {
    await Certificado.findById({ _id: req.params.id })
        .then((certificado) => {
            res.send(certificado)
        })
        .catch((err) => {
            res.status(400).send("Erro ao encontrar certificado");
            console.log(err);
        })
};

const update = async (req, res) => {
    await Certificado.updateOne({ _id: req.params.id }, req.body)
        .then(() => {
            res.status(200).send("Certificado atualizado com sucesso");
        })
        .catch((err) => {
            res.status(400).send("Erro ao atualizar certificado");
            console.log(err);
        })
};

const deleteOne = async (req, res) => {
    await Certificado.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).send("Certificado excluido com sucesso");
        })
        .catch((err) => {
            res.status(400).send("Erro ao excluir certificado")
            console.log(err);
        })
}

module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteOne
}