const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

const app = express()

app.get('/',(req,res)=>{
    res.json({message: 'get user'})
})
app.listen(port, ()=>{ 
    console.log(`hello from ${port}`)
})