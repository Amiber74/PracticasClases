const fs = require('fs')
const crypto = require('crypto')

class UserManager {

    constructor(file){
        this.file=file
    }

    async GetAllUsers() {
        try {
            const users = await fs.promises.readFile(this.file, "utf-8");
            
            return JSON.parse(users);
        } catch (error) {
            //console.error(error);
            
            return [];
        }
    }

    async CreateUser (user){ 
        const NewUser = {
            name: user.name ?? 'Sin nombre',
            lastName: user.lastName ?? 'Sin apellido',
            user: user.user ?? 'Sin nombre de usuario',
            password: this.getHash(user.password) ?? ''
        }

        const Users = await this.GetAllUsers()
        
        if(this.ExistUser(NewUser, Users)){
            return 'El usuario ya existe'
        }
        
        await Users.push(NewUser)

        try {
            await fs.promises.writeFile(this.file, JSON.stringify(Users, null, "\t"))
            console.log("Usuario registrado exitosamente")

        } catch(e) {
            console.error(e)
        }

    }

    async UserValidator(user){
        const UserValidater = {
            user: user.user,
            password: user.password,    
        }

        const users =  await this.GetAllUsers();

        
        for ( let key in users){
            console.log(users[key].user)
            if(UserValidater.user === users[key].user){
                return (this.getHash(UserValidater.password) === UserValidater[key].password) ? 'Usuario Logueado' : 'Contraseña incorrecta'
            }
        }

    }


    getHash(password){
        return crypto.createHash('sha256').update(password).digest('hex')
        //Se crea el hash con sha256 y decocemos el resultado en hexadecimal, por eso 'hex'
    }

    ExistUser (user,users){
        for ( let key in users){
            
            if(user === users[key].user){
                return true
            }
        }
        return false
    }

}

module.exports = UserManager