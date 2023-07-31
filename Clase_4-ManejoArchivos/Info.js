const temporizador = (callback,text,timer) => {
    setTimeout(()=>callback(text),timer)

}

const saludo = (texto) => {
    console.log(texto)
}

temporizador(saludo, 'Hola coders', 1000)