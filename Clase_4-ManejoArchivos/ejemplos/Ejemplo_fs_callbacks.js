const fs = require ("fs")

fs.writeFile("./EjemploCallbackFs.txt", "hola desde callbacks", (error)=>{
    if(error) return console.log("error al escribir el archivo") 

    fs.readFile("./EjemploCallbackFs.txt", "utf-8", (error,resultado)=>{
        if(error) return console.log("Error al leer archivo")   
        console.log(resultado)

        fs.appendFile("./EjemploCallbackFs.txt"," Mas contenido", (error)=>{
            if(error) return console.log("Error al actualizar el archivo")

            fs.readFile("./EjemploCallbackFs.txt", "utf-8", (error, resultado)=>{
                if(error) return console.log( "Error al leer arcihvo")
                console.log(resultado)

                fs.unlink("./EjemploCallbackFs.txt", (error)=>{
                    if (error) return console.log("Error al eliminar archivo")

                })
            })
        })
    })
})