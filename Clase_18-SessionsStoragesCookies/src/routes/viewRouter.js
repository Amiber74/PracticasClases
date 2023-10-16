import { Router } from "express";

const router = Router()

router.get('/', (req, res)=>{
    res.render('index')
})

router.post('/',(req, res)=>{

    const cookie = res.cookie('Usuario', req.body, {maxAge:10000}).send('Cookie Creada')

    res.render('index',{
        style:"index.css",
        cookie
    })

})


export default router