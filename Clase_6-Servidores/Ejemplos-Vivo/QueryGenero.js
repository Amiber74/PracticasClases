import express from 'express'

const app = express()

app.use(express.urlencoded({extend:true}))

const usuarios =[
    {id:"1",nombre:"Facundo",apellido:"Gonzalez", genero:"M"},
    {id:"5",nombre:"Silvia",apellido:"Rojas", genero:"F"},
    {id:"2",nombre:"Cristhian",apellido:"Huamani", genero:"M"},
    {id:"3",nombre:"Marko",apellido:"Huamani", genero:"M"},
    {id:"4",nombre:"Lidia",apellido:"Huamani", genero:"F"},
    {id:"6",nombre:"Ines",apellido:"Correa", genero:"F"},
    {id:"7",nombre:"Samuel",apellido:"Rojas", genero:"M"}
]


app.get('/', (req, res)=>{
    const genero =req.query.genero

    if (!genero || (genero !=='M' && genero !=='F')){
        return res.send({usuarios})
    }

    const usuariosFiltrados = usuarios.filter(usuario => usuario.genero === genero)

    res.send(usuariosFiltrados)
})

app.listen(8080 ,()=>{
    console.log("Servidor levantado en el puerto 8080")
})
