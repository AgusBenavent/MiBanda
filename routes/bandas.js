const express = require('express')
const router = express.Router()

let bandasController = require('../controllers/bandasController')

router.get('/', bandasController.listadoBandas); 
router.get('/detalle/id/:id', bandasController.detalleBanda);
router.get('/genero/:genero', bandasController.porGenero);

module.exports = router