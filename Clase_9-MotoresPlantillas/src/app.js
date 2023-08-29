import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import viewsRouter from './routes/views.router.js'
import UsersRouter from './routes/users.js'


const app = express()
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

//Se inicializa el motor indicando con app.engine('motor a utilizar' , motor instanciado)
app.engine('handlebars', handlebars.engine())

//con app.set('views',ruta) indicamos en que parte van a estar a la vista. Deben ser rutas absolutas-
app.set('views', __dirname+'/views') 

//Con esta linea de codigo indicamos que el motor que ya especificamos mas arriba es el que vamos a usar. Para que el servidor sepa que motor debe usar al momenmto de renderizar
app.set('view engine','handlebars')

//Por ultimno seteamos de manera estatica nuestra carpeta public
app.use(express.static(__dirname+'/public'));


// app.get('/', (req,res)=>{
//     /*Usamos un objeto de prueba, Se usaremos para la plantilla y asi sustituir los campos*/
//     const name = req.query.name ?? 'Usuario'
    
//     /*res.render() sera nuestro metodo para renderizar plantillas y se compoone por 
//     ( 'nombre de la plantillas', objeto que remplazara los campos )*/
//     res.render('index',{
//         title:'Hola mundo',
//         name:name
//     })
// })

// app.use('/', viewsRouter)
app.use('/',UsersRouter)




const server = app.listen(8080,()=>{
    console.log("Servidor levantado sobre el puerto 8080");
} )