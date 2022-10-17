const mongoose = require('mongoose')
const tripSchema = mongoose.Schema({
        user : {
            type : mongoose.Schema.Types.ObjectId,
            required : true,
            ref : 'User'
        },
        trip :{
            type : String,
            require : [true, 'Please add trip value']
        }
    },
    {
        timestamps: true
        
    }
)
module.exports = mongoose.model('Trip', tripSchema)