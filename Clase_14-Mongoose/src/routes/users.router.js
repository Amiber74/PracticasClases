import { Router } from "express";
import { userModel } from "../models/user.models.js"; //Importamos userModel


const router = Router()

router.get('/', async (req,res)=>{ //La funcion SIEMPRE DEBE SER ASINCRONA al trabajar con mongoose
    try{
        let users = await userModel.find() //Es un find identico al que hacemos en consultas
        res.send({
            result:'success',
            payload:users
        })

    } catch(error){
        console.error(error.message)
        res.status(500).send({
            status:'error',
            message:error.message
        })
    }
    
})


router.post('/', async(req,res)=>{
    //Obtener los datos
    let {name, last_name, email} = req.body
    //Evaluamos si existen o no
    if(!name || !last_name || !email) return res.send({status:'error', error: 'Valores incompletos'})

    let result = await userModel.create({
        //Creacion de modelo
        name,
        last_name,
        email
    })

    res.send({status:'success',payload:result})
})


router.put('/:uid', async (req, res)=>{
    
    //Obtenemos el userID (uid) de los params
    let {uid} =req.params

    //Obtenemos todo el usuario a reemplazar
    let userReplace = req.body
    const {name, last_name, email} = userReplace

    if(!name || !last_name || !email) return res.send({status:'error', error: 'Valores incompletos'})

    try{
        //usamos el _id porque mongo internamente maneja el valor _id

        let result = await userModel.updateOne({_id:uid},userReplace)

        res.send({status:'success',payload:result})
    } catch(e){
        res.status(400).send({
            status:'error',
            message:e.message
        })
    }

})


router.delete('/:uid',async (req, res)=>{
    //Obtenemos el userId de los params

    let {uid} = req.params

    try{
            
        let result = await userModel.deleteOne({_id:uid})
        res.send({status:'success',payload:result})
    }catch(e){
        res.status(400).send({
            status:'error',
            message:e.message
        }) 

    }

    
    
})



export default router