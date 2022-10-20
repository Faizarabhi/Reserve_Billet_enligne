const { text } = require('express')
const asyncHandler = require('express-async-handler')
const Trip = require('../models/tripModel')
const User = require('../models/userModel')
const Grandbus = require('../models/grandbusModel')
const { findOne } = require('../models/tripModel')
const city = require('../models/cityModel')

 // trip with bus dispo or not
 const getAllTrip = asyncHandler(async (req,res)=>{
    const trips = await Trip.find()
    res.status(200).json(trips)
})
const getTrip = asyncHandler(async (req,res)=>{
    const trips = await Trip.find({ user: req.user.id})
    res.status(200).json(trips)
})

const addTrip = asyncHandler(async (req,res)=>{
    if(!req.body){
        res.status(400)
        throw new Error('Please a trip field')
    }
  

    const interval = await Trip.find({$or : [{Departure_time : {$gte:req.body.Departure_time}},{Arrival_time : {$lte:req.body.Arrival_time}}]}).where({grandbus : {$eq : req.body.grandbus}})

    //console.log(interval)

   interval.length != 0?  res.status(400)&& Error('Grand bus deja reserved') :  await Trip.create( {
            trip : req.body.trip,
            user : req.user.id,
            grandbus : req.body.grandbus,
            from : req.body.from,
            to :req.body.to,
            Departure_time: req.body.Departure_time,
            Arrival_time : req.body.Arrival_time,
            reserved_seats : req.body.reserved_seats,
            price_trip : req.body.price_trip})
            res.status(200).json(trip)
    
   
})

const updateTrip = asyncHandler(async (req,res)=>{
    const trip = await Trip.findById(req.params.id)
    if(!trip){
        res.status(400)
        throw new Error('Trip Not found')
    }
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('User Not found')
    }
    // Make sure the Trip n the user matches the goal user
    if(trip.user?.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
      }

    const updatedTrip = await Trip.findByIdAndUpdate(req.params.id,req.body,{ new : true})
    res.status(200).json(updatedTrip)

})
const deleteTrip = asyncHandler(async (req,res)=>{
    const trip = await Trip.findById(req.params.id)
    if(!trip){
        res.status(400)
        throw new Error('Trip Not found')
    }
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('User Not found')
    }
    // Make sure the Trip n the user matches the goal user
    if(trip.user?.toString() !== user.id){
        res.status(401)
        throw new Error ('User Not ahutorized ')
    }

    await trip.remove()
    res.status(200).json({id : req.params.id})
})

module.exports = {getTrip,getAllTrip,addTrip,updateTrip,deleteTrip}