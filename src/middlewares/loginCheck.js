const { ErrorRes } = require('../res-model')
const { loginCheckFailInfo } = require('../res-model/failInfo')
const { jwtVerify } = require('../utils/jwt')

module.exports = async function loginCheck(ctx, next) {
    const errRes = new ErrorRes(loginCheckFailInfo)
    const token = ctx.header.authorization
    if (!token) {
        ctx.body = errRes
        return
    }
    try {
        const userInfo = await jwtVerify(token)
        if (userInfo && userInfo.password) delete userInfo.password
        ctx.userInfo = userInfo
        await next()
    } catch (error) {
        ctx.body = errRes
    }
}
