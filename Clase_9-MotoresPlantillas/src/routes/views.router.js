import express from 'express'

const router = express.Router()

let food = [
    {name:'hamburguesa', price:100},
    {name:'Banana', price:200},
    {name:'soda', price:300},
    {name:'ensalada', price:400},
    {name:'pizza', price:500},
]

router.get('/', (req,res)=>{

    let testUser = {
        name:'Facundo',
        lastName:'Gonzalez',
        role:'admin'
    }

    res.render('index', {
        title:'titulo',
        style:'index.css',
        user:testUser,
        IsAdmin: testUser.role === 'admin', //Si el rol del usuario es admin devuelve true
        food
    })
})

export default router