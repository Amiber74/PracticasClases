import mongoose from "mongoose";

const userCollection = 'usuarios' //Nombre de la coleccion en nuestra base de datos.

const userSchema = new mongoose.Schema({
    //Aca procedemos aescribir todas las propiedades que queremos que tenga un usuario en nuestra base
    name: String,
    last_name:String, // Para delimitar solo el tipo de dato, lo hacemos con los dos puntos
    email:{// Si necesitamos especificar mas detalles (Como 'unique') tenemos que hacerlo como objeto
        type:String,
        unique:true,
    }

})


/**
 * Ahora con mongoose.model, generamos el modelo funcinoal de un usuario conectado a la base de datos, la parte del cuerpo es el userSchema, pero el userModel ya refiere a un aspecto funcional de estos.
 */

export const userModel = mongoose.model(userCollection, userSchema) 
//Primero va la coleccion y luego va la descripcion de user