// const res = require('express/lib/response');
const Stack = require('../models/stack')

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
            res.status(200).send("Stack adicionado com sucesso")
        })
        .catch((err) => {
            res.status(400).send("Erro ao adicionar stack")
        })
};

const getById = async (req, res) => {
    await Stack.findById({ _id: req.params.id })
        .then((stack) => {
            res.send(stack)
        })
        .catch((err) => {
            res.status(400).send("Erro ao encontrar stack");
            console.log(err);
        })
};

const update = async (req, res) => {
    await Stack.updateOne({ _id: req.params.id }, req.body)
        .then(() => {
            res.status(200).send("Stack atualizado com sucesso");
        })
        .catch((err) => {
            res.status(400).send("Erro ao atualizar stack");
            console.log(err);
        })
};

const deleteOne = async (req, res) => {
    await Stack.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).send("Stack excluido com sucesso");
        })
        .catch((err) => {
            res.status(400).send("Erro ao excluir stack")
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