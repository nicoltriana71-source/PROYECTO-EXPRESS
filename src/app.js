require("dotenv").config()
const express = require("express")

//IMPORTAR ENRUTADOR
const enrutador = require("./routers")

const app = express()
//USAR MIDDLERWARE, FORMATEAR EL BODY
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//IMPORTAR EL ARCHIVO ENRUTADOR (TODAS LAS RUTAS) DE ROUTERS
app.use("/api",enrutador)


//ENPOINT RAIZ, DE BIENVENIDA
app.get("/",(req,res)=>{
    res.send("API, REST Estructurado en capas")
})

module.exports = app

