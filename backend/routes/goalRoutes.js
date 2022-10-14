const express = require('express')
const router = express .Router()
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goalController')

router.get('/',getGoals).post('/',setGoal)
router.put('/:id',updateGoal).delete('/:id',deleteGoal)

// Generate JWT
const GenerateToken = (id) => {
    return jwt.sign({id})
}
module.exports = router