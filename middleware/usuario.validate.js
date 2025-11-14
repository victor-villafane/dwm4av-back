import { usuarioSchema } from "../schemas/usuarios.js"

export async function validateUser(req, res, next){
    try {
        const datovalidado = await usuarioSchema.validate(req.body, {
            abortEarly:false, stripUnknown:true
        })
        req.body = datovalidado
        next()
    } catch (error) {
        res.status(400).json({message: error.errors})
    }
}