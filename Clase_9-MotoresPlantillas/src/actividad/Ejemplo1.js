import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from '../utils.js'

const app = express()

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views') 
app.set('view engine','handlebars')
app.use(express.static('/public'))

let food = [
    {name:'hamburguesa', price:100},
    {name:'Banana', price:200},
    {name:'soda', price:300},
    {name:'ensalada', price:400},
    {name:'pizza', price:500},
]

app.get('/', (req,res)=>{

    let testUser = {
        name:'Facundo',
        lastName:'Gonzalez',
        role:'admin'
    }

    res.render('index', {
        user:testUser,
        IsAdmin: testUser.role === 'admin', //Si el rol del usuario es admin devuelve true
        food
    })
})

const server = app.listen(8080,()=>{
    console.log("Servidor levantado sobre el puerto 8080");
} )