const { getUsers } = require('../../api/controllers/hostel.controller')
const { checkAuth } = require('../../middlewares/auth.middlewares')

const router = require('express').Router()

router.get('/', checkAuth,  getUsers)

module.exports = router