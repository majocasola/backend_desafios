const { Router } = require("express")

const routerProductos = new Router();

// routerPersonas.use(nombre_funcion);

routerProductos.get("/", (req, res) => {
    res.json({message: "Productos Router"})
})

module.exports = routerProductos;


// /api/personas2/