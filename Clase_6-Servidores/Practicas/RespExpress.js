import express from 'express'

const app = express()

app.get('/bienvenida',(req,resp)=>{
    resp.send(`<p style="color:blue" >Bienvenido a la ruta "/bienvenida" </p>`)
})

const objeto = {
    Name: "Facundo",
    LastName: "Gonzalez",
    Age: 18,
    Email:"rojas.facundo2002@gmail.com"
}

app.get('/usuario', (req,resp)=>{
    resp.send(objeto)
})

app.listen(8080,()=>{
    console.log("Servidor levantado en el puerto 8080")
})