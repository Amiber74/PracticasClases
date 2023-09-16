import express from "express";
import mongoose from "mongoose";
import handlebars from "express-handlebars";
import __dirname from './utils.js'
import viewsRouter from './routes/viewsRouter.js'


const app = express()

const uri ='mongodb://127.0.0.1:27017/Clase17'
mongoose.connect(uri) 

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views') 
app.set('view engine', 'handlebars')
app.use(express.static(__dirname+'/public'));

app.use('/studentes', viewsRouter)


const PORT = 8080
app.listen (PORT, () =>{
    console.log('Server levantado en el puerto '+ PORT )
})
