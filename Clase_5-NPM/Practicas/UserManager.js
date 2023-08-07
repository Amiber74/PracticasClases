const fs = require('fs')
const { json } = require('stream/consumers')

class UserManager {

    constructor (file){
        this.file=file
    }

    async CreateUser (user){ 

    }

    UserValidator(user){

    }

    async getAllUsers(){
        try{
            const usuarios = await fs.promises.readfile(this.file, "utf-8")
            return JSON.parse(usuarios)
        }catch(e){
            console.error (e)
            return []
        }
    }

    getHash(pass) {
        return crypto.createHash('sha256').update(pass).digest('hex')
        //Se crea el hash con sha256 y decocemos el resultado en hexadecimal, por eso 'hex'
    }

}

module.exports = UserManager