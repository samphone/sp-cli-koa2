const cors = require('koa2-cors')

const { corsOrigin } = require('../config')

module.exports = cors({
    origin: ctx => {
        if (corsOrigin === '*') return '*'
        const ref = ctx.header.referer || ''
        const originArr = corsOrigin.split(',').map(s => s.trim())
        const originArrByRef = originArr.filter(s => ref.indexOf(s) === 0)
        if (originArrByRef.length > 0) return originArrByRef[0]
        return false
    },
    credentials: true,
})
