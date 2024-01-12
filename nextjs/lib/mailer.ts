const nodeMailer = require('nodemailer')

const transporter = nodeMailer.createTransport({
  host: "smtp.zoho.com",
  port: 587,
  secure: false,
  auth: {
    user: "support@aikosnotes.info",
    pass: "Kuminga??321",
  },
});

const sendMessage = async (body:any) => {

    await transporter.sendMail({
      from: '"Chrysalis Support" <support@aikosnotes.info>', // sender address
      to: 'patrick.aikonia@gmail.com', 
      subject: body.subject, // Subject line
      text: `The user ${body.name} has sent a message. \nThe email is ${body.email}\nThe message is: \n${body.message}`,
    });
}

export default sendMessage;