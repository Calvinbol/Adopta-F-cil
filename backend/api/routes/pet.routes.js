const router = require('express').Router()

const { 
    getPets, 
    getPetById, 
    getPetsByHostel,
    createPet, 
    updatePet, 
    deletePet 
} = require('../controllers/pet.controller')
const { checkAuth } = require('../middlewares/auth.middlewares')


router.get('/', getPets)
router.get('/me', checkAuth, getPetsByHostel)
router.get('/:id', getPetById)
router.post('/', checkAuth, createPet)
router.put('/:id', updatePet)
router.delete('/:id', deletePet)

module.exports = router