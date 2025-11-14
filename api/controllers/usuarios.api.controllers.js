import * as services from "../../services/usuarios.services.js"
import * as servicesEmail from "../../services/email.services.js"

export function createUser(req, res){
    services.createUser(req.body)
        .then( usuario => res.status(201).json(usuario) )
        .catch( err => res.status(500).json(err) )
}

export function login(req, res){
    console.log("RECIBI LA SOLICITUD")
    services.login(req.body)
        .then( usuario => res.status(201).json(usuario) )
        .catch( err => res.status(400).json(err) )
}

export function recuperarCuenta(req, res){
    const email =  req.body.email
    servicesEmail.envioLinkRecuperacion(email)
    res.status(200).json({message: "enviado"})
}

export function restablecer(req, res){
    const { token, password } = req.body
    services.restablecer(token, password)
        .then(data => res.status(200).json({ message: "ok" }))
        .catch( err => res.status(400).json({message: err}) )
}