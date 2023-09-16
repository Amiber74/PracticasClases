import mongoose from 'mongoose'

const studentCollection = "students"

const StudentSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    courses:{
        types:[
            {
                course:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'courses'
                }
            }
        ],
        default:[]
    }
})

StudentSchema.pre('find', function() {

    //Middleware de pre
    this.population('courses.course')
})


const studenModel = mongoose.model ( studentCollection, StudentSchema)

export default studenModel