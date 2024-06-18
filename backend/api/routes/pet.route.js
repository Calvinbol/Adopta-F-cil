const { getPets } = require('../controllers/pet.controller')

const router = require('express').Router()


router.get('/', getPets)

module.exports = router