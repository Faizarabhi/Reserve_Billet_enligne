const express = require('express')
const router = express.Router()


const {getTrip,getAllTrip,addTrip,updateTrip,deleteTrip} = require('../controllers/tripController')
const {protect,isAdmin } = require('../middlewar/authMiddlewar')
router.route('/').get(protect,getTrip).post(protect,isAdmin,addTrip)
router.route('/All').get(getAllTrip)
router.route('/:id').put(protect,isAdmin,updateTrip).delete(protect,isAdmin,deleteTrip)
module.exports = router