const mysql = require('mysql2/promise')

const { mysqlConf } = require('../config')

async function testMysqlConnection() {
    const connection = await mysql.createConnection(mysqlConf)
    const [rows] = await connection.execute('select now()')
    return rows
}

;(async () => {
    const rows = await testMysqlConnection()
    console.log(rows)
})()

// module.exports = testMysqlConnection;
