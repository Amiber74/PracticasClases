import passport from "passport";
import local from 'passport-local'
import userModel from "../models/userModel";
import {createHash, isValidPassword} from '../utils.js'

const localStrategy = local.Strategy

const initPassport = () =>{
    passport.use('register', new localStrategy(
        {
            passReqToCallback:true,
            usernameField:'email'
        },
        async ( req, username, password, done) =>{
            const {name, last_name, age, email} = req.body

            try {
            
                let user = await userModel.findOne({email:username})
                if(user){
                    console.log('User already exist')
                    return done(null, false)
                }

                const newUser = {name, last_name, age, email, password:createHash(password)}
                let result = await userModel.create(newUser)

                return done (null, result)
                
            } catch(e) {
                return done('error al obtener usuario: '+ e.message)
            }
        }
    ))

    passport.serializeUser((user, done) =>{
        done(null, user._id)
    })
    passport.deserializeUser( async (id, done)=>{
        const user = await userModel.findById(id)
        done(null, user)
    })
}

export default initPassport