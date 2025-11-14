import yup from 'yup'

export const productoSchema = yup.object({
    nombre: yup.string().required("No se ingreso el nombre").min(3, "nombre al menos debe tener 3 caracteres"),
    categoria: yup.string().required("No se ingreso la categoria").min(5, "categoria al menos debe tener 5 caracteres"),
    precio: yup.number().required("No se ingreso el precio").positive("el precio no puede ser negativo")
})