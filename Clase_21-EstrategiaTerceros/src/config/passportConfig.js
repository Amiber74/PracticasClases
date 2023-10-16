import passport from 'passport';
import GitHubStrategy from 'passport-github2';
import userModel from '../models/userModel.js';

const initializePassport = () =>{

    passport.use(
        'github',
        new GitHubStrategy({
            clientID: 'Iv1.432d7ae713486d42',
            clientSecret: '879d6c50d71d6e40b91c2eb351a709d04fbd6e6b ',
            callbackURL: 'http://localhost:8080/api/sessions/githubcallback'
    },
    async (accessToken, refreshToken, profile, done) => {
        try {
            console.log(profile); 
            let user = await userModel.findOne({username: profile._json.username})
            if(!user) {
                let newUser = {
                    username: profile._json.login,
                    name: profile._json.name,
                    password: ''
                }
                let result = await userModel.create(newUser);
                done(null, result);
            } else {
                done(null, user);
            }
        } catch(error) {
            return done(error);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    passport.deserializeUser(async (id, done) => {
        let user = await userModel.findById(id);
        done(null, user);
    });
};

export default initializePassport;