import __dirname from './utils.js'
import mongoose from 'mongoose'
import StudentModel from './models/userModels.js'
import CourseModel from './models/courseModel.js'


const environment = async()=>{
    await mongoose.connect('mongodb+srv://rojasfacundo2002:rojasfacundo2002@cluster0.esne0dt.mongodb.net/test?retryWrites=true&w=majority')

    await StudentModel.create({
        first_name:'Facundo',
        last_name:'Gonzalez',
        email:'rojas.facundo2002@gmail.com',
        gender:'Male'
    })

    await CourseModel.create({
        title:'Backend',
        description: "Es un curso que permite desarrollar servidores bien bonitos",
        difficulty:5,
        topics:["JavaScript", "Servidores", "Motores de plantillas", "Middlewares", "Bases de datos"],
        profesor: 'Mauricio  '
    })

    let student = await StudentModel.find({_id:"001"})

    student.courses.push({courses:'002'})

    let result = await StudentModel.updateOne({_id:'001 '}, student)


    let Student = await StudentModel.find({_ud:'001'}).populate('courses.course')
    console.log(JSON.stringify(Student,null,'\t'))
}


environment()

