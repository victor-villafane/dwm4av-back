import express from "express"
import * as controllers from "../controllers/usuarios.api.controllers.js"
import { validateUser } from "../../middleware/usuario.validate.js"
import { validateToken } from "../../middleware/token.validate.js"

const route = express.Router()

route.post("/",[validateUser], controllers.createUser)
route.post("/login", controllers.login)
route.post("/recuperar-cuenta", controllers.recuperarCuenta)
route.post("/restablecer", controllers.restablecer)

export default route