/*
Crear servidor con el modulo nativo de nodejs "https. Setearuna respuesta que contenga el mensaje ¡Mi primer hola mundo desde backend!"
El servidor debe estar en el puerto 8080
Probar servidor desde navegador 
Hacer algun cambio de codigo y corroborar que ser reinicie automaticamente
*/ 

const http = require('http')

const server = http.createServer((request, response) =>{
    response.end('Mi primer hola mundo desde backend! 123')
})

const Port = 8080

server.listen(Port, ()=>{
    console.log('Listen on port'+Port)
}).on('error', (error)=>{
    console.error('error al iniciar servidor en el puerto '+Port)
})


