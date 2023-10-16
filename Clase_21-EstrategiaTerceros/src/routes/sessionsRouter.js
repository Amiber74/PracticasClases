import { Router } from "express";
import passport from "passport";

const router = Router()

router.get('/github',passport.authenticate('github',{scope:['user:_email']}),
    async (res, req)=> {
        res.send({
            status:'Success',
            message: 'Success'
        })
    }
)

router.get('/githubcallback',passport.authenticate('github',{failureRedirect:'/login'}),
    (res, req)=> {
        const {__dirname, username, name} = req.user
        req.session.user ={__dirname, username, name} 
        res.redirect('/')
    }
)

export default router