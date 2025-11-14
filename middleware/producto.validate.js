import { productoSchema } from "../schemas/producto.js"

export function validateProducto(req, res, next) {
    console.log("Validando....")
    productoSchema.validate(req.body,{
        abortEarly: false, //Se detiene en el primer error
        stripUnknown: true //Elimina automaticamente del obj los campos que no esten definidos en el schema
    })
        .then(() => next())
        .catch((err) => res.status(400).json({ message: err.errors }))
}
