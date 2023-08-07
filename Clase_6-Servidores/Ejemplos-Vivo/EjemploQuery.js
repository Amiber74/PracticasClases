import express from 'express'

const app = express()

app.use(express.urlencoded({extend:true}))

app.get('/EjemploQuerie',(req,res)=>{

    let consultas=req.query

    let {nombre,edad,apellido} = req.query

    res.send(consultas)

})

app.listen(8080, ()=>{console.log("Listo para probar las queries")})

