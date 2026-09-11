const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PUERTO || 3100; 
//IMPORTACION DE MIDLERWARE
const resgistroMiddlerware = require ("./middlerware/registroMiddlerware")
const manejadorErrores = require ("./middlerware/manejadorErrores")

//midderware para parsear datos dr body
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//midderware propios 

//Este midderware se ejecuta siempreque hagamos una peticion (GET, POST, PUT-PACH, DELETE)
app.use((req, res, next) =>{
    console.log(`Tiempo milisegundos: ${Date.now()}`)
    console.log(`Fecha: ${new Date().toISOString()}`)
    next()
})

app.use(resgistroMiddlerware)


//LEER ARCHIVO
const sistemaArchivo = require("fs")
const ruta = require("path")
const rutaArchivo = ruta.join(__dirname, "datos.json")

//LIBRERIA PARA SUBIR ARCHIVOS
const multer = require("multer")
//CONFIGURAR EL ALMACENAMIENTO ARCHIVOS 
const almacenamiento = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, "misImagenes/")
    },
    filename:(req, file, cb)=>{
        const extension = ruta.extname(file.originalname)
        cb(null, `${Date.now()}${extension}`)
    }
})

const cargar = multer({storage: almacenamiento})


app.get("/", (req, res) => {
res.send("API REST APRENDICES");
});

//ENPOINT PARA LISTAR APRENDICES 
app.get("/api/aprendices",(req, res) => {

    //LEER ARCHIVO JSON
    sistemaArchivo.readFile(rutaArchivo, "utf-8", (error, datos) => {
        if (error){
            return res.status(500).json({Error: "No se puede leer archivo o BD"})
        }
        const listaAprendices = JSON.parse(datos)
        res.status(200).json({"mensaje" : listaAprendices})
    })
})


//ENPOINT PARA LISTAR 1 APRENDIZ
app.get("/api/aprendices/:id", (req, res) => {
    res.status(200).json({
        "mensaje": "Listar 1  aprendices"
    })
})

//ENPOINT PARA CREAR APRENDICES
app.post("/api/aprendices/", cargar.single("imagen"), (req, res) => {
    //VALIDAR QUE SE ENVIEN DATOS

    const datosAprendiz = req.body
    //AGREGAR LA RUTA DE LA IMAGEN 
    datosAprendiz.imagen = req.file? `/misImagenes/${req.file.filename}`: "sin imagen"
    //LEER ARCHIVO JSON
    sistemaArchivo.readFile(rutaArchivo, "utf-8", (error, datos) => {
        if (error){
            return res.status(500).json({Error: "No se puede leer archivo o BD"})
        }
        const listaAprendices = JSON.parse(datos)
        //adicionar el nuevo aprendiz a la lista 
        listaAprendices.push(datosAprendiz)
        sistemaArchivo.writeFile(rutaArchivo, JSON.stringify(listaAprendices, null, 2), (error)=>{
            if(error){
                 return res.status(500).json({Error: "No se puede escribir en el archivo o la BD"})
            }
            res.status(200).json({"mensaje" : "Aprendiz creado", "Datos Aprendiz": datosAprendiz})
        })
    })
})

//ENPOINT PARA EDITAR
app.put("/api/aprendices/:id", (req, res) => {
    res.status(200).json({
        "mensaje": "Editar aprendices"
    })
})

//ENPOINT PARA ELIMINAR
app.delete("/api/aprendices/:id", (req, res) => {
    res.status(200).json({
        "mensaje": "Eliminar aprendices"
    })
})


//PROVOCAR ERROR
app.get("/error", (req, res, next) =>{
    next(new Error("Error intencional de mi app"))
})
app.use(manejadorErrores)


app.listen(port, () => {
console.log( `SERVIDOR: http://localhost:${port}`);
});
