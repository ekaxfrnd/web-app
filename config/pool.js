const { Sequelize } = require('sequelize')

const global = require('./global')

module.exports = new Sequelize(global.DB_NAME, global.DB_USER, global.DB_PASS, {
    host: global.SERVER_HOST,
    dialect: global.DB_DIALECT,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})