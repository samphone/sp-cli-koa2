const mongoose = require('mongoose')

const { mongoConf } = require('../config')

const { host, port, dbName, user, password } = mongoConf

let url = `mongodb://${host}:${port}`
if (user && password) {
    url = `mongodb://${user}:${password}@${host}:${port}`
}

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

// 开始连接（ 使用用户名和密码时，需要 `?authSource=admin` ）
mongoose.connect(`${url}/${dbName}?authSource=admin`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// 连接对象
const db = mongoose.connection

db.on('error', err => {
    console.log(err)
})

db.once('open', () => {
    console.log('sucess')
})

module.exports = mongoose
