const { text } = require('express')
const asyncHandler = require('express-async-handler')
const Ticket = require('../models/tiketModel')
const User = require('../models/userModel')
 
const getTicket = asyncHandler(async (req,res)=>{
    const tickets = await Ticket.find({ user: req.user.id})
    res.status(200).json(tickets)
})

const addTicket = asyncHandler(async (req,res)=>{
    if(!req.body.trip){
        res.status(400)
        throw new Error('Please a trip field')
    }
    const ticket = await Ticket.create(
        {
        trip : req.body.trip,
        user : req.user.id
        }
    )
    res.status(200).json(ticket)
})

const updateTicket = asyncHandler(async (req,res)=>{
    const ticket = await Ticket.findById(req.params.id)
    if(!ticket){
        res.status(400)
        throw new Error('Ticket Not found')
    }
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('User Not found')
    }
    // Make sure the Ticket n the user matches the goal user
    if(ticket.user?.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
      }

    const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id,req.body,{ new : true})
    res.status(200).json(updatedTicket)

})
const deleteTicket = asyncHandler(async (req,res)=>{
    const ticket = await Ticket.findById(req.params.id)
    if(!ticket){
        res.status(400)
        throw new Error('Ticket Not found')
    }
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('User Not found')
    }
    // Make sure the Ticket n the user matches the goal user
    if(ticket.user?.toString() !== user.id){
        res.status(401)
        throw new Error ('User Not ahutorized ')
    }

    await ticket.remove()
    res.status(200).json({id : req.params.id})
})

module.exports = {getTicket,addTicket,updateTicket,deleteTicket}