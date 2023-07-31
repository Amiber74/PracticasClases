// function dividir (dividendo, divisor ) {
//     return new Promise((resolve, reject) => {
//         divisor==0?reject('No se puede dividir por 0'):resolve(dividendo/divisor)
//     })
// }

// dividir(10, 0)
//     .then(resultado=>{
//         console.log(`resultado: ${resultado}`)
//     })
//     .catch(error => {
//         console.log(`error: ${error}`)
//     })

//     //Muestra el error (error: No se puede dividit por 0)

// dividir(10, 2)
//     .then(resultado=>{
//         console.log(`resultado: ${resultado}`)
//     })
//     .catch(error => {
//         console.log(`error: ${error}`)
//     })
//     //Muestra el resultado (resultado: 5)


/* Excepcion*/

// const excepcion = () => {
//     try {
//         let n2 = n*2
//         if (n2>4) throw new Error('error desde la clase error')

//         if  (n2 == 8) throw "Error!"

//         console.log('Todo bien :D')
//     } catch (e) {
//         console.error(e.message)
//     }
// }

let contador = 1
let Intercal =setInterval(() => {
                    console.log(`Ejecutando Proceso ${contador}...`)
                    contador++
                    contador>5&&clearInterval(Intercal)
                }, 2000);


async function imprimirSaludo (texto) {
    await new Promise ((resolve, reject) => setTimeout(resolve, 2000))

    console.log(texto)
}

console.log(">>>>> Inicio de Programa")

imprimirSaludo("Hola Coders!!!")  //No bloqueante

console.log(">>>>> Fin de Programa")




