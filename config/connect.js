const pool = require('./pool')

const connect = async () => {
    try {
        await pool.authenticate()
        console.log('db connected successfully')
    } catch (err) {
        console.log(`db connection error: ${err.message}`)
    }
}

module.exports = connect