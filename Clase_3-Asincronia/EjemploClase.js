
const suma = (val1 , val2) =>  val1 + val2
const resta = (val1 , val2) =>  val1 - val2
const multiplicacion = (val1 , val2) =>  val1 * val2
const division = (val1 , val2) =>  val1 / val2
const modulo = (val1 , val2) =>  val1 % val2

const operacion = (val1 , val2 , op) => {
    console.log(op(val1 , val2))

}

operacion(3,2,suma)
operacion(3,2,resta)
operacion(3,2,multiplicacion)
operacion(3,2,division)
operacion(3,2,modulo)


