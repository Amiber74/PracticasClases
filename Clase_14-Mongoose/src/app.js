import express from 'express'
import routerUsers from './routes/users.router.js'
import routerEstudiantes from './routes/estudiantes.router.js'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

/*
    Se usa el metodo "mongoose.connect", donde podremos pasar la url que recibimos de Atlas
    ¡OJO! la liga no contempla el password, por lo que tendras que sustituir el <password> por la contraseña que
    hayas elegido del usuario que hayas creado para dicho cluster (no es la contrasela de tu cuenta de atlas)
    por ultimo colocamo un argumento de callback en casod e que haya habido un error de conexion.
    ( Usualmente, si no se logro conectar a la base de datos, no podemos continuar con el sevidor, asi que suele preferir cerrar el proceso. )
*/
// const uri = 'mongodb://127.0.0.1:27017/class14'
const uri = 'mongodb+srv://rojasfacundo2002:coderhouse2023@cluster0.esne0dt.mongodb.net/Colegio?retryWrites=true&w=majority'

//mongodb+srv://<USER>:<PASSWORD>@cluster0.esne0dt.mongodb.net/<NameDB>?retryWrites=true&w=majority
mongoose.connect(uri)

// app.use('/api/users', routerUsers)
app.use('/api/estudiantes', routerEstudiantes)

const server =app.listen(8080, ()=>{
    console.log('Servidor levantado en el puerto 8080')
})
