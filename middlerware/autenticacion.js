const jswtoken = require ("jsonwebtoken")
const autenticacion = (req, res, next) => {
    //REQUERIR O CAPTURAR
    const token = req.header("Autenticar")?.split(" ")[1]
    if(!token){
        res.status(401).json({Error: "Acceso denegado, no provee token."})
    }
    //VERIFICAR CON NUESTRA CLAVE O FRASE SECRETA
    jswtoken.verify(token, process.JWT_SECRET, (error, usuario) =>{
        if (error){
             res.status(403).json({Error: "Token invalido."})
        }

        req.usuario = usuario 
        next()
    })
}

module.exports = autenticacion
