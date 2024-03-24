const db = require('../db/index');

const bandasController = {
    index:function(req,res){
        return res.render("index",{
            lista:db.lista,
            mensaje:'Todas las bandas',
             // aca guardo mi lista
        })
    },

    listadoBandas: function(req, res) {
        let nombres = []
        for (let i = 0; i < db.lista.length; i++) {
            nombres.push(db.lista[i].nombre) 
        }
        return res.render("listadoBandas",{
            lista:db.lista,
            mensaje:'Todas las bandas',
             // aca guardo mi lista
        })
    }, 

    detalleBanda:function(req,res){
        let id = req.params.id;
        let detalleBanda = []
        for (let i = 0; i < db.lista.length; i++) {
            if(id == db.lista[i].id){
                detalleBanda.push(db.lista[i])
                return res.render("detalleBanda",{
                    lista:db.lista,
                    index: detalleBanda,
                    mensaje: "Más información",
                    
                    
                })
         }
        }
        return res.render('idNoValido',{
            mensaje:'No existe el id solicitado:'+id+ ", vuelva a intentarlo"
        })  
    }, 
    

    porGenero: function(req, res) {
        let genero = req.params.genero;
        let generoBanda = []
        for (let i = 0; i < db.lista.length; i++) {
            if(req.params.genero == db.lista[i].genero){
                generoBanda.push(db.lista[i])
                return res.render("porGenero",{
                    lista: generoBanda,
                    mensaje: 'Genero',
                    Genero: genero,})
         }
        }
        return res.render('IdNoValido',{
            mensaje:'No existe el genero:'+genero+',intente nuevamente'
        })
    },
    
    porGenero2: function(req, res) {
        let genero = req.params.genero;
        let generoBanda = []
        for (let i = 0; i < db.lista.length; i++) {
            if(req.params.genero == db.lista[i].genero){
                generoBanda.push(db.lista[i])
                return res.render("porGenero2",{
                    lista: generoBanda,
                    mensaje: 'Genero',
                    Genero: genero,})
         }}
        }
    }
module.exports = bandasController

