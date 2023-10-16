import { Router } from "express";


const router = Router()

router.get('/', auth, (req, res) => {

    if (req.session.user){
                
        res.render('index',{
            title:'Bienvenido',
            style:'index.css',
            first_name: req.session.user.first_name,
            last_name: req.session.user.last_name
        })
    }
    
    return res.render(
        'login',
        {
            title:'prods',
            style:'index.css',
            loginFailed: req.session.loginFailed ?? false,
            registerSuccess: req.session.resgisterSuccess ?? false
        }
    )
})

router.get('/register', logged, (req, res)=>{
    res.render('register',
        {
            title:'Registrarse',
            style:'index.css',
            registerFailed: req.session.registerFailed ?? false
        })
})

        
function auth (req, res, next){ 
    if(!req.session.user){
        return res.redirect('/login')
    }

    next()
}

function logged(req, res, next){
    if (req.session.user){
        return res.redirect('/')
    }
    
    next()
}



export default router