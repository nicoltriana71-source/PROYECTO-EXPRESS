const listarUsuarios = require ("../services/usuariosService")
const mostrarRutaUsuarios =async (req, res)=>{
    try {
        const usuarios = await listarUsuarios()
        res.json(usuarios)
    }catch (error) {
        res.status(500).json({mensaje: "Error al comunicarse con la base de datos", error: error.message})
    }
    //res.json ({mernsaje: "todos los usuarios"})
}
//RUTA DE REGISTRARSE 
const registrarController = async (req, res)=>{
    res.json ({mernsaje: "ruta para registrarme"})
}
//RUTA DE LOGIN
const loginController = async (req, res)=>{
    res.json ({mernsaje: "ruta para iniciar sesion"})
}
module.exports = {mostrarRutaUsuarios, registrarController, loginController}
