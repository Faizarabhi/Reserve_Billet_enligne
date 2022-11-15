const express = require('express')
const router = express.Router()


const {getTrip,getAllTrip,addTrip,updateTrip,deleteTrip,searchTrip,getoneTrip} = require('../controllers/tripController')
const {protect,isAdmin } = require('../middlewar/authMiddlewar')
router.route('/').get(protect,getTrip).post(protect,isAdmin,addTrip)
router.route('/item').get(protect,getoneTrip)
router.route('/All').get(getAllTrip)
router.route('/:id').put(protect,isAdmin,updateTrip).delete(protect,isAdmin,deleteTrip)
router.route('/search').post(searchTrip)
module.exports = router