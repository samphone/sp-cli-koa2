const seq = require('../db/seq/seq')
const { string, integer, date, boolean } = require('../db/seq/types')

const User = seq.define('user', {
    userName: {
        type: string,
        allowNull: false,
        unique: 'userName',
        comment: '用户名，唯一',
    },
    password: {
        type: string,
        allowNull: false,
        comment: '密码',
    },
    phoneNumber: {
        type: string,
        allowNull: false,
        unique: 'phoneNumber',
        comment: '手机号，唯一',
    },
    nickName: {
        type: string,
        comment: '昵称',
    },
    gender: {
        type: integer,
        allowNull: false,
        defaultValue: 0,
        comment: '性别（1 男性，2 女性，0 保密）',
    },
    picture: {
        type: string,
        comment: '头像，图片地址',
    },
    city: {
        type: string,
        comment: '城市',
    },
    latestLoginAt: {
        type: date,
        defaultValue: null,
        comment: '最后登录时间',
    },
    isFrozen: {
        type: boolean,
        defaultValue: false,
        comment: '用户是否冻结',
    },
})

module.exports = User
