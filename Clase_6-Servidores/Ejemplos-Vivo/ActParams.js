import express from 'express'

const app = express()

const usuarios =[
    {id:"1",nombre:"Facundo",apellido:"Gonzalez", edad:21},
    {id:"2",nombre:"Cristhian",apellido:"Huamani", edad:20},
    {id:"3",nombre:"Marko",apellido:"Huamani", edad:18},
    {id:"4",nombre:"Lidia",apellido:"Huamani", edad:41}
]

app.get('/',(req,resp)=>{
    resp.send(usuarios)
})

app.get('/:idUsuario', (req,res)=>{

    const idUsuario = req.params.idUsuario

    let usuario = usuarios.find((u)=> u.id === idUsuario)

    if(!usuario){
        return res.send({error:'Usuario no encontrado'})
    }

    res.send({usuario})
})


const port = 8080
app.listen(port ,()=>{
    console.log("Servidor levantado en el puerto 8080")
})
