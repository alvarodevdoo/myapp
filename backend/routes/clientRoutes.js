const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clientController');

router.get('/', clienteController.getAllClientes);
router.post('/', clienteController.createCliente);
router.put('/:id', clienteController.updateCliente);

module.exports = router;
