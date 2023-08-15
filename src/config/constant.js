module.exports = {
    // 密码加密 密钥
    PASSWORD_SECRET: 'dsf_#123',
    // jwt 密钥
    JWT_SECRET: 'dsf_for-$#@token',
    // jwt 可忽略的 path：全部忽略即可，需要登录验证的，自己用 loginCheck
    JWT_IGNORE_PATH: [/\//],
    // 查询列表，默认分页配置
    DEFAULT_PAGE_SIZE: 8,
}
