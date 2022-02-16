const express = require('express')
const { engine } = require('express-handlebars')
const flash = require('connect-flash')
const session = require('express-session')

const app = express()
const global = require('./config/global')
const connect = require('./config/connect')()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('assets'))
app.use(flash())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use('/user', require('./routes/UserRoute'))
app.get('/', (req, res) => {
    res.redirect('/user/register')
})

app.listen(global.SERVER_PORT, () => {
    console.log(`listening on http://${global.SERVER_HOST}:${global.SERVER_PORT}`)
})