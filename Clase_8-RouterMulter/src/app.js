import express from 'express'
import routerUsers from './routes/users.js'
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Uso de Routers
app.use('/api/users', routerUsers)



app.listen(8080, ()=> { console.log('Servidor levantado en el puerto 8080') })


