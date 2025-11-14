function A(funciono){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if( funciono ){
                resolve("A")
            }else{
                reject("No funciono")
            }
        }, 500 )
    } )
}
function B(funciono){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if( funciono ){
                resolve("B")
            }else{
                reject("No funciono")
            }
        }, 1000 )
    } )
}
function C(funciono){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if( funciono ){
                resolve("C")
            }else{
                reject("No funciono")
            }
        }, 250 )
    } )
}
async function mostrarResultado(){
    try {        
        const mensaje1 = await A(true)
        console.log(mensaje1)
        const mensaje2 = await B(false)
        console.log(mensaje2)
        const mensaje3 = await C(true)
        console.log(mensaje3)
    } catch (error) {
        console.error(error)
    }
}
// A(true)
// .then( (mensaje) => B(true) )
// .then( (mensaje) => C(false) )
// .then( (mensaje) => console.log(mensaje) )
// .catch( (err) => console.error(err) )
console.log("antes")
mostrarResultado()
console.log("despues")
