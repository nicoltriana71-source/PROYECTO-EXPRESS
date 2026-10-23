//ruta de usuarios
const {Router}= require ("express")
const enrutador = Router() 
const {mostrarRutaUsuarios, mostrarUsuarioPorId,crearUsuarioController,actualizarUsuarioController,eliminarUsuarioController,registrarController, loginController} = require("../controllers/usuariosController")

//FUNCION (req,res) dbeer ir en el controlador
enrutador.get("/listado",mostrarRutaUsuarios)
enrutador.get("/listado/:id", mostrarUsuarioPorId)
enrutador.post("/crearUser", crearUsuarioController)
enrutador.put("/actualizar/:id", actualizarUsuarioController)
enrutador.delete("/eliminar/:id", eliminarUsuarioController)
enrutador.get("/registrar",registrarController)
enrutador.get("/login", loginController)
//FUNCION (req,res) dbeer ir en el controlador

module.exports = enrutador