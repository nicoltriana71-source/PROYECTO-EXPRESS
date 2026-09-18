//IMPORTAR MI APLICACION APP
const app = require("./app")

//VERIFICACION DEL PUERTO DE LAS VARIABLES DE ENTORNO 
const PUERTO = process.env.PUERTO || 3333

//IMPRIMO POR CONSOLA EL LINK DEL SERVIDOR 
app.listen(PUERTO, ()=>{
    console.log(`MI SERVIDOR: http://localhost:${PUERTO}`)
})

