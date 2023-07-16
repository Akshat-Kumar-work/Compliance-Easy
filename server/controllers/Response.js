const Response = require("../models/responseData");
const mailSender = require("../utils/mailSender")

exports.saveAndSend = async(req,res)=>{

    console.log("ok")

    try{
        console.log("running")
        
        const {FirstName , LastName , PhoneNumber , Email , Message} = req.body;
    



        if(!FirstName || !LastName || !PhoneNumber || !Email || !Message){
            return res.status(499).json({
                Message:"fields are empty",
                success:"false"
            })
        }


        //save
        const newResponse = await Response.create({
            FirstName:FirstName, LastName:LastName , Email:Email , PhoneNumber:PhoneNumber , Message:Message
        });

      const  body =    Email +" "+  FirstName+" " + LastName+" "+ PhoneNumber+" "+ Message;
        
        


        await mailSender(Email , body);


        return res.status(200).json({
            success:true,
            Message:"response saved successfully",
            newResponse
        })
    }
    catch(err){
        console.log("error while saving the response into db",err)
        return res.status(500).json({
            success:false,
            Message:"unable to save respone"
        })
        
       
    }

}