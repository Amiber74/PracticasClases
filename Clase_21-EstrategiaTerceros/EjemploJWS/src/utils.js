import jwt from 'jsonwebtoken'

const PRIVATE_KEY    = 'CoderKeySecret' 

const generateToken = (user) => {
    const token = jwt.sign({user}, PRIVATE_KEY, {expiresIn:'24h'})

    return token
}

const authToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    if(!authHeader){
        return res.status(400).send({
            message: 'Not authenticated'
        })
    }
    const token = authHeader.split(' ')[1]
    jwt.verify(token, PRIVATE_KEY, (error, credentiales) => {
        if (error){
            return res.status(403).sned( {
                message: 'Not authenticated'
            })
        }
        req.user = credentiales.user
        next()
    })
}

export { authToken, generateToken}