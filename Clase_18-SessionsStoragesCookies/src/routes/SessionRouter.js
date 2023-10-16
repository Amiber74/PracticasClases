import { Router } from "express";

const router = Router()

router.get('/', (req, res)=>{
    const username = req.session.user ? req.session.user : ''

    //Si al conectarse la sesion ya existe entonces aumentara el contador
    if (req.session.counter){
        req.session.counter++
        res.send(`${username} has vistiado el sitio ${req.session.counter} veces.`)
    } else {
        //Si no hay aun una sesion para el usuario, entonces incializar  en 1
        req.session.counter = 1
        res.send(`Bienvenido ${username}!`)
    }
})

router.get('/logout', (req,res)=>{

    req.session.destroy( error => {
        if(!error){
            res.send('Logout ok')
        }else{
            res.send(
                {
                    status:'Logout error',
                    body: error
                }
            )
        }
    })

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

    return next()
}

export default router