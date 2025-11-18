import express from "express"
import * as controllers from "../controllers/productos.api.controllers.js"
import { validateProducto } from "../../middleware/producto.validate.js"
import { validateToken } from "../../middleware/token.validate.js"
import { resizeImage, upload } from "../../middleware/upload.middleware.js"

const route = express.Router()
//compass: https://www.mongodb.com/try/download/compass
route.get( "/", [validateToken], controllers.getProductos )
route.get( "/:id", controllers.getProductosById )
route.post( "/", [validateProducto, upload.single('file'), resizeImage] ,controllers.createProduct )
route.delete("/:id", controllers.deleteProduct)
route.put( "/:id", controllers.reemplazarProducto )
route.patch( "/:id", controllers.editarProducto )

export default route