const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PUERTO || 3100; 

//midderware para parsear datos dr body
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//LEER ARCHIVO
const sistemaArchivo = require("fs")
const ruta = require("path")

const rutaArchivo = ruta.join(__dirname, "datos.json")

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
app.post("/api/aprendices/", (req, res) => {
    const datosAprendiz = req.body
    
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

app.post("/rutaJson", (req, res) => {
    const todosDatos = req.body
    const edad = req.body.edad2
    if (edad >= 18) {
        res.json({mensaje: "Es mayor de edad"})
     } else 
        res.json({mensaje: "Es menor de edad"})

})

app.post("/rutaFormulario", (req, res) => {
    const todosDatos = req.body
    const programa = req.body.programa
    
    res.json({TodosDatos: todosDatos, MiPrograma: programa})
})

app.listen(port, () => {
console.log( `SERVIDOR: http://localhost:${port}`);
});
