require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.APP_MAIL,
        pass: process.env.APP_MAIL_PASSWORD
    }
});

const mailOptions = {
    from: `MyleBd <${process.env.APP_MAIL}>`,
    to: `${process.env.RECIPIENT_EMAIL}`,
    subject: 'Sending Email using Node.js',
    text: 'This is test email from Node.js'
};


transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        return console.log(error);
    }

    console.log('Email sent: ' + info.response);
});