import mongoose from "mongoose";

const Collection = 'estudiantes'

const estudiantes = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    last_name:{
        type: String,
        required:true
    },
    edad:{
        type: Number,
        required:true
    },
    dni:{
        type: String,
        unique:true
    },
    curso:{
        type: Number,
        required:true
    },
    nota:{
        type: String,
        required:true
    },
})



export const EstudianteModel  = mongoose.model(Collection, estudiantes) 