const { info } = require("console")
const fs = require("fs")

const generarArchivoInfo = async () => {
    try{
        //Obtengo informacion
        const stat = await fs.promises.stat("./package.json")

        //Leo el contenido del archivo
        const contenido = await fs.promises.readFile("./package.json", "utf-8")

        //creo objeto info
        const inf = {
            contenidoStr: contenido,
            contenidoObj: JSON.parse(contenido),
            size:stat.size
        }

        //Muestra info del objeto 
        console.log(info)

        //creo info.json y lo escribo
        await fs.promises.writeFile("./info.json", JSON.stringify(info, null, "/t"))

    } catch (e){
        console.log(e)
        throw new Error("Se produjo un error al crear el archivo info.json")
    }
}