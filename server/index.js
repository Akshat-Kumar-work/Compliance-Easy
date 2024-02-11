<<<<<<< HEAD
const express = require("express");
const server = express();
const responseRoute = require("./routes/response");
require("dotenv").config();
const database = require("./config/database");
const cors = require("cors");
const PORT = process.env.PORT || 4000;


server.use(express.json());

server.use( cors({origin:"*",credentials:true}));


server.use("/api/v1",responseRoute);


database.connect();
server.listen(PORT,()=>{
    console.log("SERVER RUNNING FINE",PORT)
})

server.get("/",(req ,res)=>{
    return res.status(200).json({
       success:true
    })
=======
const express = require("express");
const server = express();
const responseRoute = require("./routes/response");
require("dotenv").config();
const database = require("./config/database");
const cors = require("cors");
const PORT = process.env.PORT || 4000;


server.use(express.json());

server.use( cors({origin:"*",credentials:true}));


server.use("/api/v1",responseRoute);


database.connect();
server.listen(PORT,()=>{
    console.log("SERVER RUNNING FINE",PORT)
})

server.get("/",(req ,res)=>{
    return res.status(200).json({
       success:true
    })
>>>>>>> 139dc3ee2dde2e6f01b5a9d249ed80e47b03803e
})