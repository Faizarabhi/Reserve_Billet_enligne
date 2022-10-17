const express = require('express')
const router = express.Router()

const {getTrip,addTrip,updateTrip,deleteTrip} = require('../controllers/tripController')
 const {protect} = require('../middlewar/authMiddlewar')
router.route('/').get( protect,getTrip).post(protect,addTrip)
router.route('/:id').put(protect,updateTrip).delete(protect,deleteTrip)
module.exports = router