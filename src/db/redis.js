const redis = require('redis')

const { redisConf } = require('../config')

const { host, port, password } = redisConf

const opt = { host, port }

if (password) {
    opt.password = password
}

const redisClient = redis.createClient(opt)

console.log(redisClient)

redisClient.on('error', err => {
    console.log(err)
})

module.exports = redisClient
