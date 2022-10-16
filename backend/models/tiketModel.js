const mongoose = require('mongoose')
const ticketSchema = mongoose.Schema({
        user : {
            type : mongoose.Schema.Types.ObjectId,
            required : true,
            ref : 'User'
        },
        trip :{
            type : String,
            require : [true, 'Please add date value']
        }
    },
    {
        timestamps: true
        
    }
)
module.exports = mongoose.model('Ticket', ticketSchema)