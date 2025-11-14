import express from "express"
import * as controller from "../controllers/productos.controller.js"

const route = express.Router()

route.get("/", controller.getProductos)

let contador = 0 // No se usa en una api rest

route.get("/nuevo", controller.nuevoProducto)
route.post("/nuevo", controller.guardarProducto)
route.get("/editar/:id", controller.editarFormulario)
route.post("/editar/:id", controller.editarProducto)
route.get("/borrar/:id", controller.eliminarFormulario)
route.post("/borrar/:id", controller.eliminarProducto)

route.get("/:id", controller.getProductosById)


export default route