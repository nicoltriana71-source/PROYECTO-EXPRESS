//ruta de solo prueba 
const {Router}=require("express")
const enrutador =Router()
const mostrarRuta = require ("../controllers/rutaPruebaController")
const {mostrarRutaUsuarios} = require ("../controllers/usuariosController")

//funcion (req,res) debe ir en un controlador 
enrutador.get("/rutaPersonal", mostrarRuta)
//enrutador.get ("/usuarios", mostrarRutaUsuarios)

module.exports= enrutador