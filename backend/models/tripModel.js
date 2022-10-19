const mongoose = require('mongoose')
const tripSchema = mongoose.Schema({
        user : {
            type : mongoose.Schema.Types.ObjectId,
            required : true,
            ref : 'User'
        },
        grandbus : {
            type : mongoose.Schema.Types.ObjectId,
            required : true,
            ref : 'Grandbus'
        },
        trip :{
            type : String,
            require : [true, 'Please add trip value']
        },
        from :{
            type : String,
            require : [true, 'Please add from']
        },
        to : {
            type : String,
            require : [true, 'Please add to']
        },
        Departure_time : {
            type : Date,
            require : [true, 'Please add deparature time']
        },
        Arrival_time:{
            type : Date,
            require : [true, 'Please add Arrival time']
        },
        reserved_seats :{
            type : Array,
            require : [true, 'Please add reserved seats']
        },
        price_trip : {
            type : Number,
            require : [true, 'Please add price trip']
        }
    },
    {
        timestamps: true
        
    }
)
module.exports = mongoose.model('Trip', tripSchema)