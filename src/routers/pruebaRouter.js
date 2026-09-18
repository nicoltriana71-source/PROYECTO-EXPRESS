//RUTA DE SOLO PRUEBA 
const {Router} = require("express")
const enrutador = Router()
const mostrarRuta = require("../controllers/rutaPruebaController.js")

//FUNCION (req,res) DEBE IR EN EL CONTROLADOR
enrutador.get("/rutaPersonal",mostrarRuta)

enrutador.get("/usuarios", (req,res)=>{
    res.json({mensaje: "Mi usuario"})
})


module.exports = enrutador

