import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import CookiesRouter from './routes/CookiesRouter.js'
import ViewRouter from './routes/viewRouter.js'
import SessionRouter from './routes/SessionRouter.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine','handlebars')

//Session
app.use(session(
    {
        secret:'secretPhrase',
        resave:true,
        saveUninitialized:true
    }
))

//Cookie
app.use(cookieParser('CoderPass2023'))
app.use('/cookie', CookiesRouter)
app.use('/view', ViewRouter) // Primera Actividad 

app.use('/session', SessionRouter) //Segunda Actividad


const Port = 8080
app.listen(Port, console.log(`Servidor levantado en el puerto ${Port}`))