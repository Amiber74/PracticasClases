import express from "express";

const router = express.Router()

const constante = [
    {        name:'Gordito',
        specie:'conejito',
        favorite:'acelga'
    }
]

router.get('/',(req, res)=>{
    res.render('index',{
        constante,
        style:'index.css',
        title:'Zeucito',
    })
})

export default router