const express = require('express')
const router = express.Router()
const bandasController = require('../Controllers/bandasController')

//Lo que pasa en cada ruta esta definida en el carpeta Controller

router.get('/', bandasController.index); 
//Ruta que nos lleva a un listado de bandas
router.get('/bandas', bandasController.listadoBandas); 

//Ruta parametrizada que nos lleva al detalle de la banda que tiene el id
router.get('/:id', bandasController.detalleBanda);

//Ruta parametrizada obligatoria que nos lleva al detalle del genero
router.get('/genero/:genero', bandasController.porGenero);
router.get('/genero', bandasController.porGenero2);

module.exports = router

