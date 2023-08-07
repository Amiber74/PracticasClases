const UserManager = require('./UserManager.js')

const UM = new UserManager('./Usuarios.json')

const newUser = {
    name:"Facundo",
    lastName: "Gonzalez",
    user:"Amiber",
    password:"Test2023",
}

UM.CreateUser(newUser)

const User = {
    name:"Cris",
    lastName: "Gonzalez",
    user:"Amiber",
    password:"Test2022",
}

UM.CreateUser(User)
