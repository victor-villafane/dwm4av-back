import swagerAutogen from "swagger-autogen"

const doc = {
    info: {
        title: "Api clientes y productos",
        description: "esta es una api de pruebas"
    },
    host: 'localhost:2025',
    schemes: ['http'] 
}

const outFile = './swagger.output.json'
const endpointFiles = ['index.js', 'api/routes/clientes.api.routes.js', 'api/routes/productos.api.routes.js']

swagerAutogen(outFile, endpointFiles).then( () => {
    
} )