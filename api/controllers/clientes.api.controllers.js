import * as services from "../../services/clientes.services.js"

export function getClientes(req, res){
    services.getClientes(req.query)
        .then( clientes => res.status(200).json(clientes) )
        .catch( err => res.status(500).json( {message: "error interno del servidor"} ) )
}

export function getClientesById(req, res){
    const id = req.params.id
    services.getClientesById(id)
        .then( cliente => {
            if( cliente ){
                res.status(200).json(cliente)
            }else{
                res.status(404).json( {message: "Recurso no encontrado"} )
            }
        } )
        .catch( err => res.status(500).json( {message: "error interno del servidor"} ) )
}

export function createCliente(req, res){
    services.guardarCliente(req.body)
        .then( clienteGuardado => res.status(201).json(clienteGuardado) )
        .catch( err => res.status(500).json({message: "No se guardo el cliente"}) )
}

export function deleteCliente(req, res){
    const id = req.params.id
    services.eliminarClienteLogico(id)
        .then( (id) => res.status(202).json({ message: `El cliente id: ${id} se elimino correctamente` }) )
        .catch( err => res.status(500).json({message: err}) )
}

export function reemplazarCliente(req, res){
    const id = req.params.id
    //TODO falta verificar que exista el id
    services.editarCliente(req.body, id)
        .then( clienteEditado => res.status(202).json(clienteEditado) )  
        .catch( err => res.status(500).json({ message: "No se pudo editar." }) )
}

export function editarCliente(req, res){
    const id = req.params.id
    services.editarClienteParcial(req.body, id)
        .then( clienteEditado => res.status(202).json(clienteEditado) )  
        .catch( err => res.status(500).json({ message: "No se pudo editar." }) )
}

export function agregarACarrito(req, res){
    const idcCliente = req.params.idCliente
    const producto = req.body

    services.agregarACarrito(idcCliente, producto)
        .then( clienteModificado => res.status(202).json(clienteModificado) )
        .catch( err => res.status(500).json({ message: "No se pudo editar." }))
}

export function getCarrito(req, res){
    const idCliente = req.params.idCliente
    services.getClientesById(idCliente)
        .then( cliente => {
            console.log(cliente)
            if( cliente ){
                return services.getCarrito(cliente)
            }else{
                res.status(404).json({ message: "Cliente no encontrado" })
            }
        } )
        .then( carrito => res.status(200).json(carrito) )
        .catch( err => res.status(500).json(err) )
}