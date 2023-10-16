import userModel from "../models/userModel.js";

class UserServices {

    async getAll (){
        
        try{    
            const result = userModel.find()
            return result
        }catch(e){
            console.error(e.message)
            return []
        }
    }

    async getOne (user){
        
        const {email, name} = user

        try {
        
            const result = userModel.findOne({email:email})
            
            return result
        } catch(e) {
        
            console.error(e.message)
        }

    }
    

}



export {UserServices}