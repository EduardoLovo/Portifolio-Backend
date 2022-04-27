const router = require("express").Router();
const projetoController = require("../controller/projetoController");

router.get('/', projetoController.getAll);
router.get('/findById/:id', projetoController.getById);
router.post('/create', projetoController.create);
router.put('/update/:id', projetoController.update);
router.delete('/delete/:id', projetoController.deleteOne);

module.exports = router;