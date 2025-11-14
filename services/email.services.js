import nodemailer from 'nodemailer'
import jwt from 'jsonwebtoken'
const emailOptions = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "victor.villafane@davinci.edu.ar",
        pass: "" //contraseña de aplicacion -> no se los voy a poder subir
    }
}

const transporter = nodemailer.createTransport(emailOptions)

export function envioLinkRecuperacion(email){
    const token = jwt.sign({email: email}, "RECUPERAR", { expiresIn: '1h' })
    const resetLink = `http://localhost:5173/restrablecer-pass/${token}`
    const bodyMail = {
        from: "victor.villafane@davinci.edu.ar",
        to: email,
        subject: "Recuperacion de contraseña",
        html: `<p>Hace click en el link para recuperar tu cuenta <a href='${resetLink}' >link recuperacion</a></p>`,
        text: "Hace click en el link para recuperar tu cuenta: " + resetLink
    }

    transporter.sendMail(bodyMail, (err, info) => {
        if(err){
            console.error(err)
        }else{
            console.log("Enviado")
        }
    } )
}