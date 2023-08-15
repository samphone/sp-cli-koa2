module.exports = {
    mysqlConf: {
        host: '192.168.0.117',
        user: 'root',
        password: 'dai190808',
        port: '3306',
        database: 'sp_cli',
    },
    mongoConf: {
        host: '192.168.0.117',
        port: '27017',
        dbName: 'sp_cli',
    },
    redisConf: {
        host: '192.168.0.117',
        port: '6379',
    },
    jwtExpiresIn: '1d', // 1. 字符串，如 '1h' '2d'； 2. 数字，单位是 s
    corsOrigin: '*',
    prefix: '/api',
}
