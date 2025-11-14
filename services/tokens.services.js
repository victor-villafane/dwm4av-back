import { MongoClient, ObjectId } from "mongodb"
import jwt from "jsonwebtoken"

const client = new MongoClient("mongodb+srv://admin:admin@hibridas.2awt6xp.mongodb.net/")
const db = client.db("DWM4AV")
const tokens = db.collection("tokens")

const SECRET_KEY = "dwm4av"

export async function crearToken(usuario) {
    const token = jwt.sign({ ...usuario, password: undefined, confirmPassword: undefined }, SECRET_KEY, { expiresIn: "2h" })

    await client.connect()

    await tokens.updateOne(
        {usuario_id: usuario._id}, //filtro 
        {$set: { token: token, usuario_id: usuario._id }}, //actualizando
        {upsert: true}
    )

    return token
}

export async function validateToken(token){
    try {
        const payload = jwt.verify(token, SECRET_KEY)
        console.log("payload", payload)
        const sessionActiva = await tokens.findOne({ token: token, usuario_id: new ObjectId(payload._id) })

        if( !sessionActiva ) throw new Error("Token invalido")
        console.log("sessionActiva", sessionActiva)

        //iat: Fecha de creacion del token
        //exp: Fecha de expiracion del token
        if( payload.exp < ( new Date().getTime() / 1000 ) ) throw new Error( "token expirado" )

        return payload
    } catch (error) {
        throw new Error("Token invalido");
    }
}
