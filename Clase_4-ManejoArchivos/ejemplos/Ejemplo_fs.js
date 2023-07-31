const fs = require("fs")

//fs.chmodSync(__dirname + "./ejemplo.txt", 666) Para dar todos los permisos de estructura

fs.writeFileSync("./ejemplo.txt", "Hola coders, estoy en un archivo")

if (fs.existsSync("./ejemplo.txt")){
    
    let contenido = fs.readFileSync("./ejemplo.txt", "utf-8")

    console.log(contenido)
    fs.appendFileSync("./ejemplo.txt", "Mas contenido!")

    contenido= fs.readFileSync("./ejemplo.txt", "utf-8")

    console.log(contenido)


    fs.unlinkSync("./ejemplo.txt")
}