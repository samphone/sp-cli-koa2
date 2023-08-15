const koaJwt = require('koa-jwt')
const { JWT_SECRET, JWT_IGNORE_PATH } = require('../config/constant')

module.exports = koaJwt({
    secret: JWT_SECRET,
    cookie: 'jwt_token',
}).unless({
    path: JWT_IGNORE_PATH,
})
