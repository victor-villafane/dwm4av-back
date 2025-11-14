import express from "express"
import ProductosRoute from "./routes/productos.route.js"
import ProductosApiRoute from "./api/routes/productos.api.routes.js"
import ClientesApiRoute from "./api/routes/clientes.api.routes.js"
import UsuariosApiRoute from './api/routes/usuarios.api.routes.js'
import swaggerFile from './swagger.output.json' with { type: 'json' }
import swaggerUI from 'swagger-ui-express'
import cors from "cors" // npm i cors

const app = express()

const corsOptions = {
    origin: "https://dwm4av.web.app",    // Permite solicites solo desde esta URL
    methods: "GET,POST,PUT,DELETE",      // Metodos permitidos
}

app.use( cors(corsOptions) )

app.use( express.urlencoded({extended: true}) )
app.use( express.json() )
//app.use( express.static("/public") )
app.use( '/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile) )

app.use( "/productos",ProductosRoute )
app.use( "/api/productos",ProductosApiRoute )
app.use("/api/clientes", ClientesApiRoute)
app.use("/api/usuarios", UsuariosApiRoute)

const port = process.env.PORT || 2025

app.listen(port, () => {
    console.log("funcionando: " + port)
})