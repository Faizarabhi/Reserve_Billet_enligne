const express = require('express')
const router = express.Router()

const {getTicket,addTicket,updateTicket,deleteTicket} = require('../controllers/tiketController')
 const {protect} = require('../middlewar/authMiddlewar')
router.route('/').get( protect,getTicket).post(protect,addTicket)
router.route('/:id').put(protect,updateTicket).delete(protect,deleteTicket)
module.exports = router