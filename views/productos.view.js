import { createPage } from "../pages/utils.js"

export function createProductPage(productos) {
    let html = "<a href='/productos/nuevo' >Nuevo producto</a>"
    html += "<br><a href='/productos?categoria=Notebook' >Notebook</a> | <a href='/productos?categoria=pantallas' >pantallas</a>"
    html += "<ul>"
    productos.forEach(producto => {
        html += `<li>${producto._id} - ${producto.nombre} 
            <a href="/productos/${producto._id}" >Ver</a>
            <a href="/productos/editar/${producto._id}" >Editar</a>
            <a href="/productos/borrar/${producto._id}" >Eliminar</a>
        </li>`
    })
    html += "</ul>"
    return createPage("Productos", html)
}

export function createProductDetail(producto) {
    let html = ""
    if (producto) {
        html += `<p>${producto._id} - ${producto.nombre} - ${producto.precio}</p>`
        html += `<a href="/productos" >Volver</a>`
    } else {
        html += "<p>No se encontro el producto</p>"
        html += `<a href="/productos" >Volver</a>`
    }
    return createPage("Detalle", html)

}

export function nuevoProducto() {
    let html = ""
    html += "<form action='/productos/nuevo' method='post' >"
    html += "<div>"
    html += "<input type='text' name='nombre' placeholder='Ingresar nombre' />"
    html += "</div>"
    html += "<div>"
    html += "<input type='number' name='precio' placeholder='Ingresar precio' />"
    html += "</div>"
    html += "<input type='submit' value='Guardar'>"
    html += "</from>"

    return createPage("Nuevo producto", html)
}

export function editarFormulario(producto){
        let html = ""
    html += `<form action='/productos/editar/${producto._id}' method='post' >`
    html += `<div>`
    html += `<input type='text' name='nombre' placeholder='Ingresar nombre' value=${producto.nombre} />`
    html += `</div>`
    html += `<div>`
    html += `<input type='number' name='precio' placeholder='Ingresar precio' value=${producto.precio} />`
    html += `</div>`
    html += `<input type='submit' value='Editar'>`
    html += `</from>`

    return createPage("Editar producto", html)
}

export function eliminarFormulario( producto ){
    let html = ""
    html += `<form action='/productos/borrar/${producto._id}' method='post' >`
    html += `<p>`
    html += `${producto.nombre}`
    html += `</p>`
    html += `<p>`
    html += `$${producto.precio}`
    html += `</p>`
    html += `<input type='submit' value='Eliminar'>`
    html += `<a href="/productos">Volver</a>`
    html += `</from>`

    return createPage("Eliminar producto", html)
}

export function eliminarExito(){
    let html = ""
    html += "<h2>Se elimino el producto correctamente</h2>"
    html += "<a href='/productos' >Volver</a>"
    return createPage("Producto eliminado correctamente", html)
}