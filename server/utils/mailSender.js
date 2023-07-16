const nodemailer = require("nodemailer");

const mailSender = async(email ,  body)=>{
    try{
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        });

  

        let info = await transporter.sendMail({
            from:"Akshat",
            to:email,
            subject:"User response",
            html:  body
        })
        console.log(info)

        return info;
    }
    catch(err){
        console.log("error while sending mail",err)
    }
}

module.exports = mailSender;