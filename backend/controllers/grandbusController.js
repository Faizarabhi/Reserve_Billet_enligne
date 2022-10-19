const { text } = require('express')
const asyncHandler = require('express-async-handler')
const Grandbus = require('../models/grandbusModel')
const Trip = require('../models/tripModel')

 
const getGrandbus = asyncHandler(async (req,res)=>{
    const grandbuss = await Grandbus.find()
    res.status(200).json(grandbuss)
})

const addGrandbus = asyncHandler(async (req,res)=>{
    if(!req.body){
        res.status(400)
        throw new Error('Please a grandbus field')
    }
    const grandbus = await Grandbus.create({
        registration_number : req.body.registration_number,
        seats_number : req.body.seats_number
    })
    res.status(200).json(grandbus)
})

const updateGrandbus = asyncHandler(async (req,res)=>{
    const grandbus = await Grandbus.findById(req.params.id)
    if(!grandbus){
        res.status(400)
        throw new Error('grandbus Not found')
    }
    
    // Make sure the user is admin 
    

    const updatedGrandbus = await Grandbus.findByIdAndUpdate(req.params.id,req.body,{ new : true})
    res.status(200).json(updatedGrandbus)

})
const deleteGrandbus = asyncHandler(async (req,res)=>{
    const grandbus = await Grandbus.findById(req.params.id)
    if(!grandbus){
        res.status(400)
        throw new Error('grandbus Not found')
    }
    
    // Make sure the user is admin
   

    await grandbus.remove()
    res.status(200).json({id : req.params.id})
})

module.exports = {getGrandbus,addGrandbus,updateGrandbus,deleteGrandbus}