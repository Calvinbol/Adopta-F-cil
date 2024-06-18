const router = require('express').Router()
const authRoutes = require('./auth.routes');
const petRoutes = require('./pet.route.js');
const hostelRoutes = require ('./hostel.route.js')



router.use('/auth', authRoutes);
router.use('/pet', petRoutes);
router.use('/hostel', hostelRoutes)

module.exports = router;