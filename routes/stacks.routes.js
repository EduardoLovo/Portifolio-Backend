const router = require("express").Router();
const stackController = require("../controller/stackController");

router.get('/', stackController.getAll);
router.get('/findById/:id', stackController.getById);
router.post('/create', stackController.create);
router.put('/update/:id', stackController.update);
router.delete('/delete/:id', stackController.deleteOne);

module.exports = router;