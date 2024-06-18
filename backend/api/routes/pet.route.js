const router = require('express').Router()

const { 
    getPets, 
    getPetById, 
    createPet, 
    updatePet, 
    deletePet 
} = require('../controllers/pet.controller')


router.get('/', getPets)
router.get('/:id', getPetById)
router.post('/', createPet)
router.put('/:id', updatePet)
router.delete('/:id', deletePet)

module.exports = router