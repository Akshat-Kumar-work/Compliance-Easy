<<<<<<< HEAD
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

=======
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

>>>>>>> 139dc3ee2dde2e6f01b5a9d249ed80e47b03803e
module.exports = mongoose.model("Response",ResponseSchema);