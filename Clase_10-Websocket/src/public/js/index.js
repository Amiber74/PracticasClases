console.log("Hola desde un archivo estatico")

const socket = io()
socket.on('msg', data =>{
    console.log(data)
})
// socket.emit('message', 'Hola, me comunico desde websocket')

/*
    io hace referencia a socket.io , se le llama asi por convecion.
    la linea 1 permite instanciar el socket y guardarlo en la constante "socket"
    Dicho socket es el que utilizaremos para poder comunicarnos con el docket del servidor.
    (Recuerda que en este punto somos "clientes", porque representamos una vista)
*/