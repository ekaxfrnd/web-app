require('dotenv').config()

const global = {
    SERVER_HOST: process.env.SERVER_HOST,
    SERVER_PORT: process.env.SERVER_PORT,
    
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_DIALECT: process.env.DB_DIALECT,
}

module.exports = global