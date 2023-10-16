import express from "express";
import {generateToken, authToken} from './utils.js'

const app = express()

const users = []

app.use(express.json())
app.use(express.urlencoded({estended:true}))


app.post('/register', (req, res)=>{
    const {name, email, password} = req.body
    const exist = users.find(user => user.email === email)

    if (exist){
        return res.status(400).send({
            status:'error',
            message: 'user already exist'
        })
    }

    const newUser = {
        name,
        email,
        password
    }

    users.push(newUser)

    const access_Token = generateToken(newUser)
    res.send({
        status:'success',
        access_Token
    })
})

app.post('/login', (req, res) => {
    const {email, password} = req.body

    const user = users.find ( user => user.email === email && user.password === password )

    if (!user){
        return res.status(400).send({
            status: 'error',
            message:'invalid credentials'
        })
    }

    const access_Token = generateToken(user)

    res.send({
        status:'success',
        access_Token
    })

})

app.get('/current', authToken, (req, res) => {
    res.send({
        status: 'success',
        user:req.user
    })
})


const PORT = 8080
app.listen(PORT, () => {
    console.log('Servidor levantado en el puerto ' + PORT)
})