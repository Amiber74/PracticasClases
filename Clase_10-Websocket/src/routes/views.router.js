import express from "express";

const router = express.Router()

// router.get('/', (req, res)=>{
//     res.render('index',{
//         title:'titulo',
//         style:'index.css'
//     })
// })

const ChatOnline = [{name:'test', message:'generico'},]

router.post('/', (req, res)=>{
    const {name, message} = req.body

    const msg ={
        name: name? name : 'sin nombre',
        message: message? message : ''
    }
    ChatOnline.unshift(msg)
    socket.broadcast.emit('msg', 'Mensaje nuevo')
    res.send(console.log('Se registro'))
})

router.get('/',(req, res)=>{
    res.render('chat',{
        ChatOnline,
        style:'index.css'
    })
})

export default router