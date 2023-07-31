/* Funciones en JavaScript */

// const contador = (num) => {
//     const P = num%2==0?' es par':' es impar'
//     console.log(num + P)
//     num-=1
//     num>=0? contador(num): console.log('fin')
// }
// contador(100)




/* Ejemplo Clases*/

console.log(">>>>>>>>>>> Hola CoderHouse!")

function escribirYLoguear (texto, CallbackParaLoguear) {
    // Simulamos quie escribimos en un archivo
    console.log(texto)
    // Al finalizar, ejecutamos el callback
    CallbackParaLoguear('archivo escrito con exito')
}


escribirYLoguear( 
    'Hola mundo de los callbacks',
    (mensajeParaLoguear) => {
        const fecha = new Date().toLocaleDateString()
        console.log(`${fecha}: ${mensajeParaLoguear}`)
    }
)