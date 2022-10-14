const express = require('express')
const router = express.Router()
const {
    registerUser,
    loginUser,
    getMe
    } = require('../controllers/UserController')
router.post('/', registerUser)
router.get('/login',loginUser)
router.get('/me', getMe)

module.exports = router 