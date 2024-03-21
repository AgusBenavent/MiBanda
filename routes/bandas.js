const express = require('express')
const router = express.Router()

let bandasController = require('../Controllers/bandasController')

//Lo que pasa en cada ruta esta definida en el carpeta Controller

//Ruta que nos lleva a un listado de bandas
router.get('/', bandasController.listadoBandas); 

//Ruta parametrizada que nos lleva al detalle de la banda que tiene el id
router.get('/detalle/id/:id', bandasController.detalleBanda);

//Ruta parametrizada obligatoria que nos lleva al detalle del genero
router.get('/genero/:genero', bandasController.porGenero);

module.exports = router