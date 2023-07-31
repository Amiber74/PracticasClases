const fs = require("fs")
const fecha = new Date().toLocaleDateString()
const hora = new Date().toLocaleTimeString()
const date = new Date().toString() // Otra forma de agregar la fecha

fs.writeFile("./Archivo.txt", `${fecha} ${hora}  `, (error)=>{
    if (error)return console.log("Error al crear archivo")

    fs.readFile("./Archivo.txt", "utf-8", (error, resultado)=>{
        if(error) return console.log("error en la lectura del arcihvo")
        console.log(resultado)
        
        fs.appendFile("./Archivo.txt", date , (error)=>{
            error && console.log("Error al agregar Contenido")

            fs.unlink("./Archivo.txt",(error)=>{
                error&& console.log("Error al eliminar archivo")
            })
        })
    })
})
