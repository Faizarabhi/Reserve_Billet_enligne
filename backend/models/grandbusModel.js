const mongoose = require('mongoose')
const grandbusSchema = mongoose.Schema({
    registration_number : {
            type : String,
            required : [true, 'Please add registration number for bus']
           
        },
        seats_number: {
            type : Number,
            required : [true, 'Please add seats  number for bus']
           
        },
        
    },
    {
        timestamps: true
        
    }
)
module.exports = mongoose.model('Grandbus', grandbusSchema)