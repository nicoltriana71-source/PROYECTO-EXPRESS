//AGRUPA LAS RUTAS DE MI APLICACION
const {Router} = require("express")
const enrutador = Router()
const pruebaRouter = require("./pruebaRouter")
const usuariosRouter = require("./pruebaRouter")

enrutador.use("/rutaPrueba", pruebaRouter)
//EJEMPLO
enrutador.use("/usuarios", usuariosRouter)

module.exports = enrutador

