const util = require('util')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/constant')
const { jwtExpiresIn } = require('../config')

const verify = util.promisify(jwt.verify)

async function jwtVerify(token) {
    return verify(token.split(' ')[1], JWT_SECRET)
}

function jwtSign(data) {
    return jwt.sign(data, JWT_SECRET, { expiresIn: jwtExpiresIn })
}

module.exports = {
    jwtVerify,
    jwtSign,
}
