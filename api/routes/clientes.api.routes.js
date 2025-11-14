import express from "express"
import * as controllers from "../controllers/clientes.api.controllers.js"

const route = express.Router()
//compass: https://www.mongodb.com/try/download/compass
route.get( "/", controllers.getClientes )
route.get( "/:id", controllers.getClientesById )
route.post( "/", controllers.createCliente )
route.delete("/:id", controllers.deleteCliente)
route.put( "/:id", controllers.reemplazarCliente )
route.patch( "/:id", controllers.editarCliente )
//ruta -> controller -> sevice
route.post("/:idCliente", controllers.agregarACarrito)
route.get("/:idCliente/carrito", controllers.getCarrito)

export default route