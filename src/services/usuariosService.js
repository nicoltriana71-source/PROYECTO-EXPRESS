const ormPrisma = require("../config/conexion")
const encriptacion = require("bcrypt");

const listarUsuarios = async ()=>{   
        const usuarios = await ormPrisma.Usuarios.findMany()
        return usuarios

}

const listarUsuarioPorId = async(id)=>{
        const usuarios = await ormPrisma.Usuarios.findUnique({
                where: { id: parseInt(id)}
        })
        return usuarios
}

const crearUsuario = async(email, name,clave)=>{
        //hashear la contraseña
        const claveHshed = await encriptacion.hash(clave, 10);
        //Crear el usuario
        const usuarios = await ormPrisma.Usuarios.create({ 
                data: {email,name,clave: claveHshed} 
                })
        return usuarios
}

const actualizarUsuario = async (id, datos) => {
        const usuarios =await ormPrisma.Usuarios.update({
                where: { id: parseInt(id)},
                data: datos 
                })
        return usuarios
}

const eliminarUsuario = async (id) => {
        const usuarios =await ormPrisma.Usuarios.delete({
                where: { id: parseInt(id)}
        })
        return usuarios
        } 
module.exports = {listarUsuarios,listarUsuarioPorId,crearUsuario, actualizarUsuario, eliminarUsuario }