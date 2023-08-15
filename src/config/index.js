const { isProd, isProdDev } = require('../utils/env')

let fileName = 'dev.js'

if (isProdDev) fileName = 'prod-dev.js'
if (isProd) fileName = 'prod.js'

const conf = require(`./envs/${fileName}`) // eslint-disable-line

module.exports = conf
