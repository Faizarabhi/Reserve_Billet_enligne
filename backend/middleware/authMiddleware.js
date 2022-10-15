const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const protect = asyncHandler(async(req,res,next)=>{
let token
if(req.header.authorization && req.headers.authorization.startsWith('Bearer')){
    try{
        token = req.header.authorization.split('')[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await  User.findById(decode.id).select('-password')
        next()
    }
    catch(error){
        console.log(Error)
        res.status(401)
        throw new Error()

    }
}
if(!token){
    res.status(401)
    throw new Error('No authorize, no token')
}
}) 
module.exports = {protect}