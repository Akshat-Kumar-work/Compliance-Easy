<<<<<<< HEAD
const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017";

exports.connect = ()=>{
    mongoose.connect(MONGODB_URL , {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then( ()=>{console.log("db connected successfully")})
    .catch( (err)=>{console.log("db connection failed")
                    console.log(err)
                    process.exit(1)
})
};


=======
const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017";

exports.connect = ()=>{
    mongoose.connect(MONGODB_URL , {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then( ()=>{console.log("db connected successfully")})
    .catch( (err)=>{console.log("db connection failed")
                    console.log(err)
                    process.exit(1)
})
};


>>>>>>> 139dc3ee2dde2e6f01b5a9d249ed80e47b03803e
