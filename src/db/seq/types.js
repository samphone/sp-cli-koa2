const Sequelize = require('sequelize')

module.exports = {
    string: Sequelize.STRING,
    text: Sequelize.TEXT,
    integer: Sequelize.INTEGER,
    boolean: Sequelize.BOOLEAN,
    date: Sequelize.DATE,
}
