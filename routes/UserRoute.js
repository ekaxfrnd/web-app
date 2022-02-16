const router = require('express').Router()

const { getRegister, postRegister } = require('../controllers/UserController')

router.get('/register', getRegister)
router.post('/register', postRegister)

module.exports = router