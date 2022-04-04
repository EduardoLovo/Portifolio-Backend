const router = require("express").Router();
const CertificadoController = require("../controller/certifcadoController");

router.get('/', CertificadoController.getAll);
router.get('/findById/:id', CertificadoController.getById);
router.post('/create', CertificadoController.create);
router.put('/update/:id', CertificadoController.update);
router.delete('/delete/:id', CertificadoController.deleteOne);


module.exports = router;