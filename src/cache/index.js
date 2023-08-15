const redisClient = require('../db/redis')

const cache = {
    get(key) {
        return new Promise((resolve, reject) => {
            redisClient.get(key, (err, val) => {
                if (err) {
                    reject(err)
                    return
                }
                if (val === null || val === undefined) {
                    resolve(null)
                    return
                }
                try {
                    resolve(JSON.parse(val))
                } catch (error) {
                    reject(val)
                }
            })
        })
    },
    set(key, val, timeout = 60 * 60) {
        let formatData
        if (typeof val === 'object') {
            formatData = JSON.stringify(val)
        } else {
            formatData = val
        }
        redisClient.set(key, formatData)
        redisClient.expire(key, timeout)
    },
}

module.exports = cache
