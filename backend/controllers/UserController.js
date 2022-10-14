const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')



const registerUser = asyncHandler(async(req, res) =>{
    const {name, email,password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }
    // Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashePassword = await bcrypt.hash(password, salt )

    // create User
    const user = await User.create({
        name,
        email,
        password : hashePassword
    })
    if(user){
        res.status(201).json({
            _id : user.id,
            name : user.name,
            email : user.email,
            token: GenerateToken(user._id)
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid ser data')
    }

    res.json({message : 'Register User'})
})
const loginUser = asyncHandler(async(req, res) =>{
    const {email, password} = req.body
    //chack User email
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id : user.id,
            name : user.name,
            email : user.email,
            token: GenerateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid credentials')
    }
    res.json({message : 'Login User'})
})
const getMe = asyncHandler(async(req,res) =>{
    res.json({message: 'User data display'})
})
// Generate JWT
const GenerateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET,
        {expiresIn: '30d' })
}
module.exports = {
                registerUser,
                loginUser,
                getMe 
                }