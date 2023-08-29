import express from 'express';
const app = express()

//NIVEL DE APLICACION
app.use (function(req, res, next){
    console.log('Time: ', Date.now())
    next()
})


//NIVEL DE ENDPOINT
function mid1 (req, res, next){
    console.log('Time: ', Date.now())
    next()
}
function mid2 (req, res, next){
    console.log('Time: ', Date.now())
    next()
}

app.get('/ruta1',mid1, (req,res)=>{
    res.json({
        dato1:req.dato1
    })
})
app.get('/ruta2', mid1, mid2, (req,res)=>{
    res.json({
        dato1:req.dato1,
        dato2: req.dato2
    })
})

//NIVEL DE ROUTER
const roputer = express.Router()
app.use (function(req, res, next){
    console.log('Time: ', Date.now())
    next()
})


//MANEJO DE ERRORES
app.use (function (err, req, res, next){
    console.error(err.stack)
    res.status(500).send('Something broke')
})


//MIDDLEWARE INCORPORADO
app.use(express.static('public', options))


//MIDDLEWARE DE TERCEROS
const Ej='$npm install cookie-parser'

let cookieParser = require('cookie-parser')
app.use(cookieParser())


