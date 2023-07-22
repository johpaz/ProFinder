const fs = require("fs")
const path = require("path")
const nodemailer = require("nodemailer");
const htmlToText = require('nodemailer-html-to-text').htmlToText;
require('dotenv').config();
const { google } = require("googleapis")
const { ADMIN_EMAIL, ADMIN_PASSWORD, CLIENT_ID_EMAIL, CLIENT_SECRET_EMAIL, REDIRECT_URI, REFRESH_TOKEN } = process.env
const oAuth2Client = new google.auth.OAuth2({
    CLIENT_ID_EMAIL,
    CLIENT_SECRET_EMAIL,
    REDIRECT_URI
});

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        type: "OAuth2",
        user: ADMIN_EMAIL,
        pass: ADMIN_PASSWORD,
        clientId: CLIENT_ID_EMAIL,
        clientSecret: CLIENT_SECRET_EMAIL,
        refreshToken: REFRESH_TOKEN,
    }
});

const sendEmailWelcome = async (email) => {
    try {
        const htmlContent = fs.readFileSync('C:/Users/Famili/Desktop/Profinder/Api/src/configs/nodemailer/WelcomeMessage/index.html', 'utf-8');
        transporter.use('compile', htmlToText());
        const mailOptions = {
            from: `"App Profinder" < ${ADMIN_EMAIL} >`, // sender address
            to: email, // list of receivers
            subject: "Bienvenido", // Subject line
            html: htmlContent// html body            
        }
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.log(error);
    }

};

const sendEmailRestartPassword = async (email, name) => {
    try {
        const htmlContent = fs.readFileSync('C:/Users/Famili/Desktop/Profinder/Api/src/configs/nodemailer/RestartPassword/index.html', 'utf-8');
        htmlContent.replace("{{nombre}}", name)
        transporter.use('compile', htmlToText());
        console.log(htmlContent);
        const mailOptions = {
            from: `"App Profinder" < ${ADMIN_EMAIL} >`, // sender address
            to: email, // list of receivers
            subject: "Bienvenido", // Subject line
            html: htmlContent// html body            
        }
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.log(error);
    }
}

const sendEmailPremium = async () => {
    try {
        const htmlContent = fs.readFileSync('C:/Users/Famili/Desktop/Profinder/Api/src/configs/nodemailer/PremiumMessage/index.html', 'utf-8');
        htmlContent.replace("{{nombre}}", name)
        transporter.use('compile', htmlToText());
        const mailOptions = {
            from: `"App Profinder" < ${ADMIN_EMAIL} >`, // sender address
            to: email, // list of receivers
            subject: "Bienvenido", // Subject line
            html: htmlContent// html body            
        }
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    sendEmailWelcome,
    sendEmailRestartPassword,
    sendEmailPremium
}
