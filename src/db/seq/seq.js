const Sequelize = require('sequelize')

const { mysqlConf } = require('../../config')
const { isTest, isProd } = require('../../utils/env')

const { database, user, password, host, port } = mysqlConf

const conf = {
    host,
    port,
    dialect: 'mysql',
}

if (isTest) {
    conf.logging = () => {}
}

if (isProd) {
    conf.pool = {
        max: 5,
        min: 0,
        idle: 10 * 1000,
    }
}

const seq = new Sequelize(database, user, password, conf)

seq.authenticate()
    .then(() => console.log('ok'))
    .catch(err => console.log('error'))

module.exports = seq
