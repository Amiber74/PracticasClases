import express from 'express'

const app = express()

const server = app.listen (8080,()=>{
    console.log("Server levantado en el puerto 8080")
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const users=[]

app.delete('/api/user/:name',(req,res)=>{
    let name = req.params.name
    let length = user.length
    
    users=users.filter(user=>user.first_name!=name)

    if(users.length === length){
        return res.status(400).send({status:"error", error:"Usuario no encontrado"})
    }

    res.send({status:"success",message:"Usuario elimindo"})

})