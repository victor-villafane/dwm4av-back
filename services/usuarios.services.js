import { MongoClient, ObjectId } from "mongodb"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import { crearToken } from "./tokens.services.js"

const client = new MongoClient("mongodb+srv://admin:admin@hibridas.2awt6xp.mongodb.net/")
const db = client.db("DWM4AV")

const SECRET_KEY = "dwm4av"

export async function createUser(usuario){
    await client.connect()
    const exite = await db.collection("usuarios").findOne({ email: usuario.email })
    if( exite ) throw new Error("No se pudo crear el usuario")

    const usuarioNuevo = { email: usuario.email, password: usuario.password }
    if( usuario.age ) usuarioNuevo.age = usuario.age
    usuarioNuevo.password = await bcrypt.hash(usuario.password, 10)

    await db.collection("usuarios").insertOne(usuarioNuevo)
    return { ...usuario, password: undefined, confirmPassword: undefined }
}

export async function login(usuario){
    await client.connect()
    const exite = await db.collection("usuarios").findOne({ email: usuario.email })
    if( !exite ) throw new Error("Credenciales invalidas")
    const token = await crearToken(exite)
    
    const esValido = await bcrypt.compare( usuario.password, exite.password )
    if( !esValido ) throw new Error("Credenciales invalidas")
    
    return { ...exite, password: undefined, confirmPassword: undefined, token: token }
}

export async function restablecer(token, password){
    try {
        await client.connect()
        // console.log(token, password)
        const payload = jwt.verify(token, "RECUPERAR")
        const email = payload.email
        // console.log("email: ", email)
        const existe = await db.collection("usuarios").findOne({ email: email })
        if( !existe ) throw new Error("Credenciales invalidas")
        // console.log("existe: ", existe)
        await db.collection("usuarios").updateOne({ email: email }, 
            { $set: {
                password:  await bcrypt.hash(password, 10)
            } }
        )
        return { message: "OK" }
    } catch (error) {
        console.log("error:",error)
        throw new Error(error)
    }
    
}