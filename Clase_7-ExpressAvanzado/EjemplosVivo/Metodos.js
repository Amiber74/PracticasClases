import express from 'express'
import UserManager from './UseManager'

const app = express()
const UM = UserManager('./Usuarios.json')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/api/users', async (req, res) =>{
    res.send(await UM.GetAllUsers())
})

app.get('/api/users/:Id', async (req, res)=>{
    res.send( await UM.GetUserById(req.params.Id))
})

app.post('/api/users', async (req, res)=>{
    res.send( await UM.CreateUser(req.body))
})

app.delete('/api/users/:Id', async (req, res)=>{
    res.send( await UM.DeleteUserByID(req.params.Id))
})

app.listen(8080,()=>{
    console.llog("Servidor levantado en el puerto 8080")
})
