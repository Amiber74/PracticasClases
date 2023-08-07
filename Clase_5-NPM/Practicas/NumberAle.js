

// const Objeto = {
//     1:0,
//     2:0,
//     3:0,
//     4:0,
//     5:0,
//     6:0,
//     7:0,
//     8:0,
//     9:0,
//     10:0,
//     11:0,
//     12:0,
//     13:0,
//     14:0,
//     15:0,
//     16:0,
//     17:0,
//     18:0,
//     19:0,
//     20:0,
// }

// for (let i=1; i < 10001; i++) {

//     const Num=generarNumeroAleatorio()

//     if(Num == 1){
//         Objeto[1]++
//     }
//     if(Num == 2){
//         Objeto[2]++
//     }
//     if(Num == 3){
//         Objeto[3]++
//     }
//     if(Num == 4){
//         Objeto[4]++
//     }
//     if(Num == 5){
//         Objeto[5]++
//     }
//     if(Num == 6){
//         Objeto[6]++
//     }
//     if(Num == 7){
//         Objeto[7]++
//     }
//     if(Num == 8){
//         Objeto[8]++
//     }
//     if(Num == 9){
//         Objeto[9]++
//     }
//     if(Num == 10){
//         Objeto[10]++
//     }
//     if(Num == 11){
//         Objeto[11]++
//     }
//     if(Num == 12){
//         Objeto[12]++
//     }
//     if(Num == 13){
//         Objeto[13]++
//     }
//     if(Num == 14){
//         Objeto[14]++
//     }
//     if(Num == 15){
//         Objeto[15]++
//     }
//     if(Num == 16){
//         Objeto[16]++
//     }
//     if(Num == 17){
//         Objeto[17]++
//     }
//     if(Num == 18){
//         Objeto[18]++
//     }
//     if(Num == 19){
//         Objeto[19]++
//     }
//     if(Num == 20){
//         Objeto[20]++
//     }
// }
// console.log(Objeto)



function NumberAle (Max){
    const Numbers = []

    for (let i =1 ; i<=Max ; i++){
        let Num=Math.floor(Math.random() * (20 - 1 + 1)) + 1
        Numbers.push(Num)
    }
    
    return Numbers

}

function Objeto (array) {
    const Obj = {}

    array.forEach((el)=>{
        Obj[el] = Obj[el] ? Obj[el]+1 : 1
    })
    return Obj
}
function SumaValues(obj){
    const AcumTotal=Object.values(obj).reduce((total, valor) => total + valor, 0) 
    return AcumTotal
}

const Final = Objeto(NumberAle(20))
console.log(Final)
console.log(SumaValues(Final))