const express = require('express');
const router = express.Router();
const cargoController = require('../controllers/cargoController');

router.post('/', cargoController.createCargo);
router.get('/:id', cargoController.getCargo);

module.exports = router;