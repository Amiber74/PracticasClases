import { Router } from "express"
import UserService from "../services/userServices.js"

const router = Router()
const US = new UserService()

router.post('/register', async (req, res) =>{
    try{
        const result = await US.createUser(req.body)
        res.send(result)

    } catch (e){
        res.status(400).send({
            message: e.message
        })
    }
})

router.post('/login', async (req, res)=>{

    try{
        const {email, password} = req.body
        const {first_name, last_name, age} = await US.login(email, password)

        req.session.user = {first_name, last_name, email, age}
        req.session.loginFailed = false

        res.redirect('/')
    } catch(e) {     
        req.session.loginFailed = true
        res.redirect('/login')
    }
})

export default router