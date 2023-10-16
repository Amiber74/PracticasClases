import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import handlebars from 'express-handlebars'
// import fileStore from 'session-file-store'
import MongoStore from 'connect-mongo'

import __dirname from './utils.js'

//rutas
import CookieRouter from './routes/CookieRouter.js'


// const fileStorage = fileStore(session)
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine','handlebars')

//Cookies
app.use(cookieParser('CoderPass2023'))

//Session
app.use(session(
    {
        store:MongoStore.create({
            mongoUrl: 'mongodb+srv://rojasfacundo2002:Facu2023@cluster0.esne0dt.mongodb.net/Coder?retryWrites=true&w=majority',
            mongoOptions:{useUnifiedTopology: true},
        }),
        secret:'secretPhrase',
        resave:true,
        saveUninitialized:true
    }
))


app.use('/cookies', CookieRouter)



const port = 8080
app.listen(port, console.log(`Servidor levantado sobre el puerto ${port}`))