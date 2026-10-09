//agregar las rutas de mi aplicacion 
const {Router}=require("express")
const enrutador =Router()
const pruebaRouter = require("./pruebaRouter")
const usuariosRouter = require ("./usuariosRouter")

enrutador.use("/rutaPrueba", pruebaRouter)
//ejemplo 
enrutador.use ("/usuarios", usuariosRouter)

module.exports= enrutador