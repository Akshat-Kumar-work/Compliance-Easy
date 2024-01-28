const nodemailer = require("nodemailer");

const mailSender = async(email ,  clientBody , compliancebody)=>{
    try{
        let transporter = nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        });

  

        let info = await transporter.sendMail({
            from:"Compliance Eazy",
            to:email,
            subject:"response submitted",
            html: clientBody
        })

        let info2 = await transporter.sendMail({
            from:"Client Query",
            to:"iamakku0.0.0.1@gmail.com",
            subject:"User response",
            html:  compliancebody
        })

        return info;
    }
    catch(err){
        console.log("error while sending mail",err)
    }
}

module.exports = mailSender;