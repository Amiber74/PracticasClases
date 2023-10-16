import { Router } from "express"

const router = Router()

router.post('/setCookie', (req, res)=>{

    const User = {
        Name:req.body.inputName,
        Email:req.body.inputEmail
    }

    res.cookie('Usuario', User, {maxAge:10000, signed:true}).send('Cookie Creada')

})

router.get('/getCookie', (req,res) => {
    
    res.send({
        cookies: req.cookies,
    })

    res.render('index',)

})

router.get('/deleteCookie', (req, res)=>{
    
    res.clearCookie('CoderCookie').send('Cookie Removed')

})


export default router