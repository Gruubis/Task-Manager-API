const sgMail = require('@sendgrid/mail')




sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rolikazz@gmail.com',
        subject: 'thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendDeletionEmail = ( email, name) => {
    sgMail.send({
        to: email,
        from: 'rolikazz@gmail.com',
        subject: 'You deleted your account',
        text: `We will miss you, ${name}.`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendDeletionEmail
}