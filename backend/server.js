const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middlewar/errorMiddlewar')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/tikets',require('./routes/tiketRoutes'))
app.use('/api/users',require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, ()=>{ 
    console.log(`hello from ${port}`)
})