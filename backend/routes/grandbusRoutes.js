const express = require('express')
const router = express.Router()

const {getGrandbus,addGrandbus,updateGrandbus,deleteGrandbus} = require('../controllers/grandbusController')
 const {protect,isAdmin} = require('../middlewar/authMiddlewar')
router.route('/').get(getGrandbus).post(protect,isAdmin,addGrandbus)
router.route('/:id').put(protect,isAdmin,updateGrandbus).delete(protect,isAdmin,deleteGrandbus)
module.exports = router