import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import __dirname from './utils/dirname.js'
import handlebars from 'express-handlebars'

import userRouter from './routes/userRouter.js'
import viewRouter from './routes/viewRouter.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + './../views')
app.set('view engine','handlebars')

const uri = 'mongodb+srv://rojasfacundo2002:FacuPass@cluster0.esne0dt.mongodb.net/Coder?retryWrites=true&w=majority'

mongoose.connect(uri)

app.use(session(
    {
        store:MongoStore.create({
            mongoUrl: uri,
            mongoOptions: { useUnifiedTopology:true},
            ttl:100
        }),
        secret: 'secretPhrase',
        resave:true,
        saveUninitialized:true

    }
))

app.use('/api/users', userRouter)
app.use('/', viewRouter)

const port = 8080
app.listen(port, console.log('Servidor levantado en el puerto '+ port))