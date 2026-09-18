//RUTA DE SOLO PRUEBA 
const {Router} = require("express")
const enrutador = Router()
const mostrarRuta = require("../controllers/rutaPruebaController.js")
const mostrarUsuarios = require("../controllers/usuariosController.js")

//FUNCION (req,res) DEBE IR EN EL CONTROLADOR
enrutador.get("/rutaPersonal",mostrarRuta)
enrutador.get("/usuarios",mostrarUsuarios)


module.exports = enrutador

