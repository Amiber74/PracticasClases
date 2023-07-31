const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 2
    },
];
// console.log(objetos)

const arr_key = []

objetos.forEach((obj)=>{
    Object.keys(obj).forEach((e)=>{
        if (!arr_key.includes(e)){
            arr_key.push(e)
        }
    })
})
// console.log(arr_key)


const arr_value = Object.values(objetos.reduce((acc, obj) => {
    for (const prod in obj){
        if(acc[prod]){
            acc[prod]+=acc[prod]
        }else{
            acc[prod] = obj[prod]
        }
    }
    return acc
},{}))


// console.log(arr_value)




console.log("USO DE TRIM Y FLAT")

const mensaje = "                  Hola Mundo!!!                           "

const Modificacion_Trim = mensaje.trim()

console.log(mensaje)
console.log(Modificacion_Trim)

const arr = [1, 2, [3, 4], [5, [6, 7]],8 ,9]

const Modificacion_Flat = arr.flat(2) //Poniendo un numero especificamos el nivel de profundidad, por defecto 1
console.log(Modificacion_Flat)


















