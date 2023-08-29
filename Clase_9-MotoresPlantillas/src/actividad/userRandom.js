import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'

const app = express()

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views') 
app.use(express.static('/public'))


const users = [
    {
        name:"nom0",
        LastName:"ape0",
        age:0,
        email:"correo0",
        phone:0,
    },
    {
        name:"nom1",
        LastName:"ape1",
        age:1,
        email:"correo1",
        phone:1,
    },
    {
        name:"nom2",
        LastName:"ape2",
        age:2,
        email:"correo2",
        phone:2,
    },
    {
        name:"nom3",
        LastName:"ape3",
        age:3,
        email:"correo3",
        phone:3,
    },
    {
        name:"nom4",
        LastName:"ape4",
        age:4,
        email:"correo4",
        phone:4,
    },
    
]


app.get('/', (req,res)=>{
    
const randomNumber = Math.round(Math.random() * 4);

    res.render('index',
    users[randomNumber]
    )
})

const server = app.listen(8080,()=>{
    console.log("Servidor levantado sobre el puerto 8080");
} )