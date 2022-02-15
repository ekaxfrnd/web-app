const express = require('express')
const { engine } = require('express-handlebars')

const app = express()
const global = require('./config/global')
const connect = require('./config/connect')()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('assets'))
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')

app.get('/', (req, res) => {
    res.render('register', {
        title: 'Register'
    })
})

app.listen(global.SERVER_PORT, () => {
    console.log(`listening on http://${global.SERVER_HOST}:${global.SERVER_PORT}`)
})