const User = require('../models/User')

module.exports = {
    getRegister: (req, res) => {
        res.render('register', {
            title: 'Register',
            success: req.flash('success'),
            warning: req.flash('warning')
        })
    },
    postRegister: async (req, res) => {
        try {
            const { firstName, lastName, username, password } = req.body
            if(!firstName || !lastName || !username || !password) {
                req.flash('warning', 'Content can not be empty!')
            }
            const process = await User.create(req.body)
            if(process) {
                res.redirect('/user/register')
                req.flash('success', 'User registered')
                return
            }
        } catch (err) {
            console.log(`error: ${err.message}`)
        }
    }
}