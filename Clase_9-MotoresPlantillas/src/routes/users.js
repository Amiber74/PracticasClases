import express from 'express'

const router = express.Router()

const users = [{name:'nombre',email:'email',pass:'este'}]

router.post('/post',(req,res)=>{
    const {name, email, pass} = req.body 

    const user= {
        name:name ? name : 'sin valor',
        email:email ? email : 'sin valor',
        pass:pass ? pass : 'sin valor',
    }
    users.push(user)

    res.send('Usuario creado exitosamente')

})

router.get('/', (req,res)=>{
    
    res.render('register',{
        users,
        style:'index.css',
    })
})


export default router