export function createPage(titulo, contenido){
    let html = ""

    html += '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    html += '<title>'+ titulo +'</title>'
    html += '<h1>'+titulo+'</h1>'
    html += "" //boostrap 5
    html += "link css"
    html += contenido
    html += '</body></html>'

    return html
}

export function createProductList(productos){
    let html = "<ul>"
    productos.forEach( producto => {
        html += `<li>${producto.id} - ${producto.nombre} - ${producto.precio}</li>`
    } )
    html += "</ul>"
    return html
}

// module.exports = {createPage, createProductList}
// export { createPage, createProductList }
// export default createPage
