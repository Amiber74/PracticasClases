import express from 'express'
import session from 'express-session'
import mongoose from 'mongoose'
import MongoStore from 'connect-mongo'
import handlebars from 'express-handlebars'
import __dirname from './utils/dirname.js'
import passport  from 'passport'

import initPassport from './config/passport.config.js'

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine','handlebars')

// const uri = 'mongodb+srv://rojasfacundo2002:FacuPass@cluster0.esne0dt.mongodb.net/Coder?retryWrites=true&w=majority'
const uri = 'mongodb://127.0.0.1:27017/clase20'


mongoose.connect(uri)

app.use(session(
    {
        store: MongoStore.create({
            mongoUrl: uri,
            mongoOptions: { useUnifiedTopology: true },
            ttl: 100
        }),
        secret: 'secretPhrase',
        resave: false,
        saveUninitialized: false
    }
))

initPassport()

app.use(passport.initialize())
app.use(passport.session())