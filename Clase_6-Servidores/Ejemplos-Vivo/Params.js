import express from 'express'

const app = express()

app.get('/unparam/:nombre',(req,resp)=>{
    console.log(req.params.nombre)
    resp.send(`Bienvenidos ${req.params.nombre}`)
})

app.get('/dosparams/:nombre/:apellido', (req,resp)=>{
    resp.send(`El nombre completo es: ${req.params.nombre} ${req.params.apellido}`)
})

app.listen(8080,()=>{
    console.log("Listo para recibir peticiones")
})