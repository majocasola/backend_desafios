const express = require("express");

const Contenedor = require("./utils/contenedor");
const dbName = "db.json";
const contenedor = new Contenedor(dbName);
const { auth } = require("./middlewares/auth");
const routerProductos = require("./routes/productos");
const upload = require("./storage");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.use((req, res, next) => {
    const date = new Date(Date.now());
    console.log(date.toLocaleString());
    next();
} )

// La lista de personas almacenadas
// GET /api/personas/
// params: req request, peticion
//         res response respuesta
app.get("/api/productos", (req, res) => {
    const listadoProductos = contenedor.getAll();
    res.json(listadoProductos)
    console.log(req.query)
    // req.query.q
    // req.query.maxSize
    // res.send()
})

app.get("/api/producto/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const producto = contenedor.getById(id);
    res.json(producto);
});

app.use("/api/productos2", routerProductos);

const server = app.listen(PORT, (req, res) => {
    console.log(`Server listening on port: ${PORT}`)
})