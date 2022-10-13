const express = require('express')
const colors = require('colors')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
connectDB();
const {errorHandler} = require('./middlewars/erroMiddleware.js')
const app =  express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler)
app.use('/api/goals', require('./routes/goalRoutes'))
app.listen(port, ()=>console.log(`Server started in port ${port} `))