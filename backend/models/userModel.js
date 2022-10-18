const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
        fullname : {
            type : String,
            require : [true, 'Please add a name']
        },
        email : {
            type : String,
            require : [true,'Please add an email']
        },
        password : {
            type : String,
            require : [true, 'Please add a password']
        },
        role : {
          type : Number,
          default : 0,
        }

    },
    {
      timestamps: true,
    }
  )
  
  module.exports = mongoose.model('User', userSchema)