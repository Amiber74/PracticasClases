import { Router } from "express"


const router = Router()

const pets = [
    {
        name: 'Firulais',
        species:'perro',
    }
]

router.get('/',(req,res)=>{
    res.send(pets)
})

router.post('/', (req,res)=>{
    
        const pet ={
            name:req.body.name ?? 'Sin nombre',
            species:req.body.species ?? 'Sin raza'
        }
    

        pets.push(pet)
    
        res.status(201).send('Mascota registrada con exito')

})


export default router