import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient("mongodb+srv://admin:admin@hibridas.2awt6xp.mongodb.net/")
const db = client.db("DWM4AV")

export async function getProductos( filter = {} ) {
    const filterMongo = { eliminado: { $ne: true } }

    if( filter.categoria != undefined ){
        filterMongo.categoria = { $eq: filter.categoria }
    }

    if( filter.mayorQue != undefined ){
        filterMongo.precio = { $gte: parseInt(filter.mayorQue) }
    }

    if( filter.menorQue != undefined ){
        filterMongo.precio = { $lte: parseInt(filter.menorQue)  }
    }

    if( filter.mayorQue != undefined ){
        filterMongo.precio = { $gte: parseInt(filter.mayorQue) }
    }

    if( filter.menorQue != undefined &&  filter.menorQue != undefined ){
        filterMongo.$and = [ { precio: { $gte: parseInt(filter.mayorQue) } }, { precio: { $lte: parseInt(filter.menorQue) } } ]
    }

    await client.connect()
    return db.collection("productos").find(filterMongo).sort({ precio: -1 }).toArray()   //mayor a menor
}

export async function getProductosById(id) {
    await client.connect()
    return db.collection("productos").findOne( { _id: new ObjectId(id) } )
}

export async function guardarProducto(producto){
    await client.connect()
    return db.collection("productos").insertOne(producto)
}

export function editarProducto(producto, id){
    return db.collection("productos").replaceOne({ _id: new ObjectId(id) }, producto)
}

// export function eliminarProductoFisica(id){
//     return getProductos().then( async productos => {
        
//         const productosFiltrados = productos.filter( p => p.id != id )

//         await writeFile("./data/productos.json", JSON.stringify(productosFiltrados))

//     } )
// }

export function eliminarProductoLogico(id){
    return db.collection("productos").updateOne({ _id: new ObjectId(id) }, {
        $set: { eliminado: true }
    })
}
export function editarProductoParcial(producto, id){
    return db.collection("productos").updateOne({ _id: new ObjectId(id) }, {$set: producto})
}