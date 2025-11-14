import yup from 'yup'

export const usuarioSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
            .matches(/[0-9]/, "La contraseña debe tener al menos un numero")
            .matches(/[A-Z]/, "La contraseña debe tener al menos una mayuscula")
            .matches(/[a-z]/, "La contraseña debe tener al menos una minuscula")
            .matches(/[@%!$¿?]/, "La contrañsea debe tener al menos un caracter especial"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Las contraseñas deben coincidir").required(),
    age: yup.number().optional().min(1).positive()
})

export const usuarioLogin = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
})