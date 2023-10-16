import userModel from '../models/userModel.js';
import crypto from 'crypto'

class UserService {

    async getUser(uid){
        try{
            const result = await userModel.findOne({_id: uid}) 

            return {
                status:'success',
                payload: result
            }
        } catch (e) {
            console.error(e.message);
            return {
                status: 'error', 
                message: error.message.replace(/"/g, "'")
            }

        }
    }

    async createUser(user){

        try{
            user.password = this.getHash(user.password)
            const result = await userModel.create(user)

            return {
                status:'success',
                payload: result
            }
        
        } catch (e) {
            console.error(e.message);
            return {
                status: 'error', 
                message: e.message.replace(/"/g, "'")
            }

        }

    }

    async login(email, password){

        try{

            const user = await userModel.find({email:email})
            
            if (user.length > 0 && user[0].password === this.getHash(password)){
                return {
                    status: 'success',
                    payload:user[0]
                }
            }

            throw new Error('Login failed')

        } catch (e) {
            console.error(e.message);
            return {
                status: 'error', 
                message: e.message.replace(/"/g, "'")
            }
        }

    }

    getHash ( password){
        return crypto.createHash('sha256').update(password).digest('hex')
    }

}

export default UserService