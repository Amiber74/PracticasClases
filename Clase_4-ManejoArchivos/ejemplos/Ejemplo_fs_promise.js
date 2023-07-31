const fs = require("fs")

const operacionAsincronica = async() => {
    await fs.promises.writeFile("./Archivo.txt", "Hola desde promesas!!")

    let resultado = await fs.promises.readFile("./Archivo.txt", "utf-8")
    console.log(resultado)

    await fs.promises.appendFile ("./Archivo.txt", " mas contenido")

    resultado = await fs.promises.readFile("./Archivo.txt", "utf-8")
    console.log(resultado)

    await fs.promises.unlink("./Archivo.txt")
}

operacionAsincronica()