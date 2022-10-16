 
 const jwt = require('jsonwebtoken')
 const bcrypt = require('bcryptjs')
 const asyncHandler = require('express-async-handler')
 const User = require('../models/userModel')

 const registerUser = asyncHandler(async(req,res)=>{
    const {fullname, email, password} = req.body
    if(!fullname || !email || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }
    // chack if user exists
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('User already Exists')
    }
    // hach password
    const salt =  await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    // create user
    const user = await User.create({
        fullname,
        email,
        password: hashedPassword 
    })
    if(user){
        res.status(201).json({
            _id : user.id,
            name : user.fullname,
            email : user.email,
            token: generateToken(user._id),
        })

    }else{
        res.status(400)
        throw new Error('Invalid User data')
    }
    res.json({message: 'register User'})
 })
 const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
  
    // Check for user email
    const user = await User.findOne({ email })
  
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.fullname,
        email: user.email,
        token: generateToken(user._id),
        
      })
    } else {
      res.status(400)
      throw new Error('Invalid credentials')
    }
  })
  
 const getMe =  asyncHandler(async(req,res)=>{
    const {_id, fullname, email} = await User.findById(req.user.id)
    res.status(200).json({
        id : _id,
        fullname, 
        email,
    })
 })

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, "abc123", {
      expiresIn: '30d',
    })
  }

 module.exports = {registerUser, loginUser, getMe}