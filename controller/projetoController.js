// const res = require('express/lib/response');
const Stack = require('../models/projeto')

const getAll = async (req, res) => {
    await Stack.find({})
        .then((stack) => {
            res.send(stack);
        })
        .catch((err) => {
            console.log(err);
        })
};

const create = async (req, res) => {
    await Stack.create(req.body)
        .then(() => {
            res.status(200).send("Projeto adicionado com sucesso")
        })
        .catch((err) => {
            res.status(400).send("Erro ao adicionar projeto")
        })
};

const getById = async (req, res) => {
    await Stack.findById({ _id: req.params.id })
        .then((stack) => {
            res.send(stack)
        })
        .catch((err) => {
            res.status(400).send("Erro ao encontrar projeto");
            console.log(err);
        })
};

const update = async (req, res) => {
    await Stack.updateOne({ _id: req.params.id }, req.body)
        .then(() => {
            res.status(200).send("Projeto atualizado com sucesso");
        })
        .catch((err) => {
            res.status(400).send("Erro ao atualizar projeto");
            console.log(err);
        })
};

const deleteOne = async (req, res) => {
    await Stack.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).send("Projeto excluido com sucesso");
        })
        .catch((err) => {
            res.status(400).send("Erro ao excluir projeto")
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