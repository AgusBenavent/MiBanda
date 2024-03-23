const db = require('../db/index');

const bandasController = {
    listadoBandas: function(req, res) {
        res.render('listadoBandas', {lista: db.lista})
    }, 

    detalleBanda: function(req, res) {
        let ids = []
        for (let i = 0; i < db.lista.length; i++) {
            ids.push(db.lista[i].id)
            if(req.params.id == db.lista[i].id) {
                return res.send(db.lista[i])
        }
        }

        if(ids.includes(Number(req.params.id)) == false){
            return res.send(`No existe tal id`)
        }
    }, 

    porGenero: function(req, res) {
        let bandas = []
        for (let i = 0; i < db.lista.length; i++) {
            if(req.params.genero == db.lista[i].genero.toLowerCase()) {
                bandas.push(db.lista[i])         
            }  
        }   

        if(bandas.length == 0){
            return res.send(`No existe tal genero`)
        } else {
            return res.send(bandas) 
        }
    }
}

module.exports = bandasController