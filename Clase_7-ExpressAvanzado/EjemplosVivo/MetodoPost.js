import express from 'express'

const app=express()

const server = app.listen (8080,()=>{
    console.log("Server levantado en el puerto 8080")
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

let users = []

app.post('/api/user',(req,res)=>{
    let user = req.body

    if ( !user.first_name || !user.last_name){
        return res.status(400).send({status:'error', error:'Valores incompletos'})
    }

    users.push(user)
    res.send({status:"success", message:"user created"})

})

