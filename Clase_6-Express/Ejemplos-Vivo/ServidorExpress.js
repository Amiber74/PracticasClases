import express from 'express'
// const express =require('express')

const app = express()

//Ruta, route o endpoint
app.get('/saludo', (request, response)=>{
    response.send("Hola a todos, pero ahora donde express! 001")
})

const port = 8080

app.listen(port, ()=>{
    console.log("Servidor arriba del puerto "+port)
})