const Contenedor = require('./clase.js')
let miContenedor = new Contenedor();
const express = require("express");
const app = express();

app.get('/', (req, res)=>{
    res.send("<h1 style='color: blue'>Bienvenido ami desafio de server</h1>");
});

app.get('/productos', (req, res)=>{
    const resultado = miContenedor.traerArray();
    res.send(`Productos en el json: ${resultado}`);
})

app.get('/productoRandom', (req, res)=>{
    const productos = JSON.parse(miContenedor.traerArray());
    let random = JSON.stringify(productos[Math.floor(Math.random()*productos.length)]);
    res.send(`Producto Random: ${random}`);
})

const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`)
})

server.on("error", error=>console.log(`Error: ${error}`))




