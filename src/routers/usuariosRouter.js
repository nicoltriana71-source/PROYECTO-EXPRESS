const {Router}= require("express")
const enrutador = Router()
const {mostrarRutaUsuarios, registrarController, loginController} = require ("../controllers/usuariosController.js")

//FUNCION (REQ,RES) DEBE IR EN EL CONTROLADOR 
enrutador.get("/listado", mostrarRutaUsuarios)
//FUNCION (REQ,RES) DEBE IR EN EL CONTROLADOR
enrutador.post("/registrar", registrarController)
enrutador.post("/login", loginController)

module.exports = enrutador