const mongoose = require("mongoose");

const ResponseSchema = new mongoose.Schema({
    FirstName:{
        type:String,
    },
    LastName:{
        type:String
    },
    Email:{
        type:String
    },
    PhoneNumber:{
        type:Number
    },
    Message:{
        type:String
    }
});

module.exports = mongoose.model("Response",ResponseSchema);