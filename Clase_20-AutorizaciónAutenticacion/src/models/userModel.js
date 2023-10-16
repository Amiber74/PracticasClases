import mongoose from "mongoose";

const userCollection = 'users'

const userSchema = mongoose.Schema({
    name: {
        type:String,
        minLength: 3,
        require:true
    },
    email:{
        type:String,
        minLength: 3,
        require:true,
        unique:true
    },
    pass:{
        type:String,
        minLength: 1,
        require:true,
        unique:true
    }
})

const userModel =mongoose.model(userCollection, userSchema)

export default userModel