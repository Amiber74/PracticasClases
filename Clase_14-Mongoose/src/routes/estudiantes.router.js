import { Router } from "express";
import {EstudianteModel} from '../models/estudiantes.models.js'

const router = Router()

router.get('/', async (req, res) =>{

    try{
        let students = await EstudianteModel.find()
        res.send({
            result:'success',
            payload:students
        })
    }catch (e){
        res.status(500).send({
            status:'error',
            message:error.message
        })
    }
})

router.post('/', async(req, res)=>{

    let {name, last_name, edad, dni, curso, nota} = req.body

    if(!name|| !last_name|| !edad|| !dni|| !curso|| !nota){
        return res.send({status:'error', error:'Valores incompletos'})
    }

    try{
        let result = await EstudianteModel.create({
            name, 
            last_name, 
            edad, 
            dni, 
            curso, 
            nota
        })
        res.send({status:'success',payload:result})

    }catch(e){
        res.status(400).send({
            status:'error',
            message:e.message
        })
    }
})

router.put('/:uid', async(req, res)=>{
    
    let {uid} =req.params

    let studentReplace = req.body

    let {name, last_name, edad, dni, curso, nota} = req.body

    if(!name|| !last_name|| !edad|| !dni|| !curso|| !nota){
        return res.send({status:'error', error:'Valores incompletos'})
    }
    
    try{

        let result = await EstudianteModel.updateOne({_id:uid},studentReplace)
        
        res.send({status:'success',payload:result})

    }catch(e){
        res.status(400).send({
            status:'error',
            message:e.message
        })

    }

})

router.delete('/:uid', async(req, res)=>{

    let {uid} = req.params

    try{
        let result = await EstudianteModel.deleteOne({_id:uid})
        
        res.send({status:'success',payload:result})
    }catch (e){
        res.status(400).send({
            status:'error',
            message:e.message
        })
    }
})


export default router