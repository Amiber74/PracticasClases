import bcrypt from 'bcrypt'

/**
 * hashSync toma el password que pasemos y procedera a aplicar un proceso de hasheo a partir de 
 * un salt.
 * genSaltSync generara un Salt de 10 caracteres. un Salt es una string random que hace que el
 * proceso de hasheo se realice de manera impredecible.
 * Devuelve una string con el password hasheado. EL proceso es irreversible
 */

export const createHash = (password) => {
    bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

/**
 * compareSync tomara primero el passwrod sin hashear y lo comparar con el password ya hasheado
 * en la base de ddatos. devolvera true o false dependiendo si el password coincide o no
 */

export const isValidPassword = (user,password) => {
    bcrypt.compareSync(password, user.password)
}