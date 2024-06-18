const router = require('express').Router()
const authRoutes = require('./auth.routes');
const petRoutes = require('./pet.route.js');



router.use('/auth', authRoutes);
router.use('/pet', petRoutes);

module.exports = router;