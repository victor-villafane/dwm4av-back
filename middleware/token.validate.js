import * as tokenService from "../services/tokens.services.js"

/*
EJEMPLO FETCH PARA EL FRONT

const myJwtToken = 'YOUR_JWT_TOKEN_HERE'; // Replace with your actual JWT

fetch('https://api.example.com/protected-resource', {
  method: 'GET', // Or 'POST', 'PUT', 'DELETE', etc.
  headers: {
    'Content-Type': 'application/json', // Adjust based on your request body type
    'Authorization': `Bearer ${myJwtToken}`
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json(); // Or response.text(), response.blob(), etc.
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  console.error('Error:', error);
});

*/

export async function validateToken(req, res, next) {
    try {
        console.log(req.headers)
        const auth = req.headers.authorization

        if (!auth) return res.status(401).json({ message: "Token no encontrado" })

        // const token = auth.split(" ")[1]
        const [bearer, token] = auth.split(" ")

        if (bearer != "Bearer" && !token) return res.status(401).json({ message: "Formato de token invalido" })

        const usuario = await tokenService.validateToken(token)
        console.log(usuario)

        if (!usuario) return res.status(401).json({ message: "Token invalido" })
        req.usuario = usuario

        console.log(token)

        next()
    } catch (error) {
        res.status(401).json({ message: "Token Error" })
    }
}
