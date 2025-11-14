import * as services from "../../services/productos.services.js"

export function getProductos(req, res){
    services.getProductos(req.query)
        .then( productos => res.status(200).json(productos) )
        .catch( err => res.status(500).json( {message: "error interno del servidor"} ) )
}

export function getProductosById(req, res){
    const id = req.params.id
    services.getProductosById(id)
        .then( producto => {
            if( producto ){
                res.status(200).json(producto)
            }else{
                res.status(404).json( {message: "Recurso no encontrado"} )
            }
        } )
        .catch( err => res.status(500).json( {message: "error interno del servidor"} ) )
}

export function createProduct(req, res){
    const producto = {
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        precio: req.body.precio
    }
    services.guardarProducto(producto)
        .then( productoGuardado => res.status(201).json(productoGuardado) )
        .catch( err => res.status(500).json({message: "No se guardo el producto"}) )
}

export function deleteProduct(req, res){
    const id = req.params.id
    services.eliminarProductoLogico(id)
        .then( (id) => res.status(202).json({ message: `El producto id: ${id} se elimino correctamente` }) )
}

export function reemplazarProducto(req, res){
    const id = req.params.id
    const producto = {
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        precio: req.body.precio
    }
    //TODO falta verificar que exista el id
    services.editarProducto(producto, id)
        .then( productoEditado => res.status(202).json(productoEditado) )  
        .catch( err => res.status(500).json({ message: "No se pudo editar." }) )
}

export function editarProducto(req, res){
    const id = req.params.id
    // const producto = {
    //     nombre: req.body.nombre,
    //     categoria: req.body.categoria, //le asigno un undefined
    //     precio: req.body.precio
    // }
    //TODO falta verificar que exista el id
    services.editarProductoParcial(req.body, id)
        .then( productoEditado => res.status(202).json(productoEditado) )  
        .catch( err => res.status(500).json({ message: "No se pudo editar." }) )
}