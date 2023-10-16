import { Router } from "express";

const router = Router()

router.get('/', (req, res)=>{

    const User = {
        Name:'Facu',
        Email:'a@b.com'
    }

    res.cookie('Usuario', User, {maxAge:10000, signed:true}).send('Cookie Creada')

})

router.get('/login',auth , (req, res) =>{ 
    res.send(`login success ${req.session.user}`)
})

function auth (req, res, next) {

    const {username, password} = req.query

    if (username != 'facu' || password != 'facuPass'){
        return res.send( 'login failed')
    }

    req.session.user = username;
    req.session.admin = true;
    res.cookie('User', username, {maxAge:10000, signed:true})
    return next()
}

export default router