/* 
Fs (abreviacion de File System)
Sistema manejador de archivos que nos proporciana node para:
    .Crear
    .Leer
    .Actualizar
    .Eliminar
*/

// UTILIZAR FS 

const fs = require('fs') /*Llamada a fs (Se puede llamar desde cualquier archivo)
Todos los modulos de FilSystem estan contenidos en la variable fs
Solo debemos llamar a los metodos para usarlos
De tres formas se puede hacer:
    .Sincronico
    .Callbacks
    .Promesas
*/

//Uso de fs Sincronico

fs.writeFileSync // Escribe contenido en un archivo, si el archivo no existe crea uno. Si esxite lo sobreescribe

fs.readFileSync // Para obtener conenido de un archivo

fs.appendFileSync // Para añadir un archivo, No sobreescribe 

fs.unlinkSync // Elimina el archivo, no solamente el contenido

fs.existsSync // Corrobora que un archivo exista



/* FS CON CALLBACKS
Solo readFile maneja un segundo argumetnos, con el resultado de la lectura del archivo*/

fs.writeFile // Escribir contenido en un archivo, si existe sobreescribe. Callback = (error)=>

fs.readFile // Para obtener contenido de un archivo. Callback = (error, resultado)=> 

fs.appendFile // Para añadir contenido a un archivo, no sobreescribe. Callback = (error)=>

fs.unlink // Elimina todo el archivo, no solo el contenido. Callback = (error)=>


/*  FS CON PROMESAS
En vez de manejarnos con calbacks nos manejaremos con .then y .catch*/

fs.promises.writeFile // Excribir contenido archivo

fs.promises.readFile // Leer contenido del archivo

fs.promises.appendFile // Para añadir contenido del archivo, No sobreescribe

fs.promises.unlink // Para eliminar el archivo, no solo el contenido


/* MANEJO DE JSON
JSON.stringify(Objeton a convertir)  CONVERSION DE OBJETO A .JSON

JSON.parse(JSON que se transforma a Objeto) CONVERSION DE .JSON A OBJETO
*/

