import express from 'express'
import __dirname from './utils.js'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import { Server } from 'socket.io' // este import es nuevo, este 'server' se creara a paritr del server HTTP

const app = express()
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//Configuramos todo lo referente a plantillas
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views') 
app.set('view engine','handlebars')
app.use(express.static(__dirname+'/public')) // Importante para tener archivos js y css en plantillas
app.use('/', viewsRouter)  

const httpServer = app.listen(8080,()=>{
    console.log('Servidor levantado en el puerto 8080')
})

//Ahora algo nuevo, se crear un servidor para sockets viviendo dentro de nuestro servidor principal

const socketServer = new Server(httpServer) //socketServer sera un servidor para trabajar con sockets

// socketServer.on('connection', socket => {
//     console.log('Nuevo cliente conectado')
//     socket.on('message', data =>{
//         console.log(data) //EJEMPLO 1
//     })
// })

socketServer.on('connection', socket =>{
    console.log('Usuario entro al chat')
    
})