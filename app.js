import express from 'express';
import "dotenv/config"

const app = express();
const port = process.env.PUERTO || 3000; 

app.get("/", (_, res) => {
res.send("Aprendicez ficha 3407186 SENA");
});

//ENDPOINT
app.get("/ruta1", (req, res)=>{
    //template string
    res.send(`<h1>Usandi res, send</h1>`)
})

app.get("/ruta2", (req, res)=>{
    //template string
    res.json({"dev":"node --watch app.js", "script":"node app.js"})
})

//RUTAS DINAMICAS
app.get("/ruta3/:nombre/:apellido", (req, res)=>{
    let nameUsuario = req.params.nombre
    let apellido = req.params.apellido
    res.json({"usuario": nameUsuario, "apellido": apellido});
})


app.get("/ruta4", (req, res)=>{
    const numero = req.query.phone || 3163601029
    const orden = req.query.orden || "Sin orden"
    const pagina = req.query.pagina || 1
    res.send(`<h1>Listado aprendices</h1>
        <h2>El listado en orden: ${orden} </h2>
        <p>Pagina: ${pagina}</P>
        <h3>Numero: ${numero}</h3>
        `)
})

app.listen(port, () => {
console.log( `Servidor: http://localhost:${port} `);
});
